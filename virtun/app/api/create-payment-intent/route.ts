import Stripe from "stripe";
import { NextResponse } from "next/server";
import prisma  from "@/libs/prismadb";
import { CartProductType } from "@/app/product/[productId]/productDetails";
import { getCurrentUser } from "@/actions/getCurrentUser";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

const totalPrice = (items:CartProductType[])=>{
  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const total:any = Math.floor(totalPrice);
  return total;
};

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if(!currentUser) return NextResponse.json({ error : "User not found" }, {status : 400} );


  const body = await request.json();
  const { items , paymentIntentId } = body;
  const total = totalPrice(items)*100;
  const orderData = {
    user: { connect: { id: currentUser.id }},
    amount: total,
    currency: "usd",
    status: "pending",
    deliveryStatus: "pending",
    paymentIntentId: paymentIntentId,
    products: items
  };

  if (paymentIntentId){
    // Do something if paymentIntentId exists
    const currentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if(currentIntent){
      const updatedIntent = await stripe.paymentIntents.update(
        paymentIntentId,
        { amount: total }
        );
        const [existingOrder, updatedOrder] = await Promise.all([
          prisma.order.findFirst({
            where: { paymentIntentId: paymentIntentId },
          }),
          prisma.order.update({
            where: { paymentIntentId: paymentIntentId },
            data: {
              amount: total,
              products: items
            }
          }),
        ]);
        if (!existingOrder){
          return NextResponse.json({ error : "Invalid payment intent" }, {status : 400} );
        }
        return NextResponse.json({ paymentIntent: updatedIntent } )
    }

  }else{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      automatic_payment_methods: {enabled: true},
    });
    orderData.paymentIntentId = paymentIntent.id;

    await prisma.order.create({
      data: orderData,
    })
    return NextResponse.json({ paymentIntent } )
  }
}