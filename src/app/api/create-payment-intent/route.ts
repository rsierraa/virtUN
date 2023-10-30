import Stripe from "stripe";
import { NextResponse } from "next/server";
import { CarritoDeCompra, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

const totalPrice = (cart:CarritoDeCompra)=>{
  let totalPrice = cart?.subtotal;
  if (!totalPrice) totalPrice = 0;
  return totalPrice;
};

export async function POST(request: Request) {
  // const currentUser = null;
  // if (currentUser === null) {
  //   return NextResponse.redirect("../auth/[...nextauth]", { status: 303 });
  // }
  const body = await request.json();
  const { cart , paymentIntentId } = body;
  const total = totalPrice(cart);
  const orderData = {
    // user: { connect: { id: currentUser.id } },
    amount: total,
    currency: "usd",
    status: "pending",
    deliveryStatus: "pending",
    paymentIntentId: paymentIntentId,
    cart: cart
  };

  if (paymentIntentId){
    // Do something if paymentIntentId exists
    const currentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if(currentIntent){
      const updatedIntent = await stripe.paymentIntents.update(
        paymentIntentId,
        { amount: total });
        const [existingOrder, updatedOrder] = await Promise.all([
          prisma.order.findFirst({
            where: { paymentIntentId: paymentIntentId },
          }),
          prisma.order.update({
            where: { paymentIntentId: paymentIntentId },
            data: orderData,
          }),
        ]);
        if (existingOrder){
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
      data: orderData, // Cast orderData to Prisma.OrderCreateInput
    })
    return NextResponse.json({ paymentIntent } )
  }
}