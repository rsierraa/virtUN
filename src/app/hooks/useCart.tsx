import ProductCard from "@/components/ProductCard";
import { Product } from "@prisma/client";
import { use, useCallback, useEffect, useState , createContext, useContext} from "react";

type CartContextType = {
  cartProducts: Product[] | null;
  paymentIntent: String | null;
  handleSetPaymentIntent: (val: String | null) => void;
};
interface ProductCardProps {
  product: Product;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {

  const [cartProducts, setCartProducts] = useState<Product[] | null>(null);
  const [paymentIntent, setPaymentIntent] = useState<String | null>(null);


  useEffect(() => {
    const cartProducts: any = localStorage.getItem("cartProducts");
    const resPaymentIntent: any = localStorage.getItem("resPaymentIntent");
    const paymentIntent:string | null = JSON.parse(resPaymentIntent);

    setPaymentIntent(paymentIntent);
    setCartProducts(cartProducts);
  }, []);

  const handleSetPaymentIntent = useCallback((val:string|null)=>{
    setPaymentIntent(val);
    localStorage.setItem("resPaymentIntent", JSON.stringify(val));
  },[]);

  const value = {
    cartProducts,
    paymentIntent,
    handleSetPaymentIntent,
  };
  return <ProductCard product={value}/>;

};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
