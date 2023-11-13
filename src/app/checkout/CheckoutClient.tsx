"use client";

import { useRouter } from "next/router";
import { useEffect ,useState } from "react";
import { useCart } from "@/app/hooks/useCart";

// const CheckoutClient = () => {
//   const {cartProducts, paymentIntent, handleSetPaymentIntent} = useCart();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const router = useRouter()
//   const [clientSecret, setClientSecret] = useState("");
//   useEffect(() => {
//     if(cartProducts){
//       setLoading(true);
//       setError(false);
//       fetch("/api/create-payment-intent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           cart: cartProducts,
//           paymentIntentId: paymentIntent ,
//         }),
//       }).then((res) => {
//         setLoading(false);
//         if (res.status === 401){
//           return router.push("/login");
//         }
//         return res.json();
//       }).then((data) => {
//         setClientSecret(data.paymentIntent.client_secret);
//         handleSetPaymentIntent(data.paymentIntent.id);
//       }).catch((error) => {
//         setError(true);
//       });
//     }
//   }, [cartProducts, handleSetPaymentIntent, paymentIntent, router]);
//   return <>Checkout</>;
// }
// export default CheckoutClient;

import { prisma } from "@/lib/db/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export default async function handler(cart:any){
  try{
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Stubborn Attachments",
              images: ["https://i.imgur.com/EHyR2nP.png"],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        }
      ],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
    })
    if (session.url){
      // res.redirect(303, session.url);
    }
  } catch (error) {
    console.log(error);
    // res.status(500).json({ error });
  }
}