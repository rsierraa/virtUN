"use client";

import { useRouter } from "next/router";
import { useEffect ,useState } from "react";

const CheckoutClient = () => {
  const {cartProducts, paymentIntent, handleSetPaymentIntent} = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    if(cartProducts){
      setLoading(true);
      setError(false);
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: cartProducts,
          paymentIntentId: paymentIntent ,
        }),
      }).then((res) => {
        setLoading(false);
        if (res.status === 401){
          return router.push("/login");
        }
        return res.json();
      }).then((data) => {
        setClientSecret(data.paymentIntent.client_secret);
        handleSetPaymentIntent(data.paymentIntent.id);
      }).catch((error) => {
        setError(true);
      });
    }
  }, [cartProducts, handleSetPaymentIntent, paymentIntent, router]);
  return <>Checkout</>;
}
export default CheckoutClient;