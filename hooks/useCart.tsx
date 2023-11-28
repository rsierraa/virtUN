import { CartProduct } from "@/app/product/[productId]/ProductDetails";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import { toast } from "react-hot-toast";

type CartContextTypes = {
  cartProducts: CartProduct[] | null;
  handleAddProductToCart: (product: CartProduct) => void;
  handleRemoveProductFromCart: (product: CartProduct) => void;
  handleCartQtyIncrease: (product: CartProduct) => void;
  handleCartQtyDecrease: (product: CartProduct) => void;
  handleClearCart: () => void;
  cartTotalQty: number;
  cartTotalAmount: number;
  paymentIntent: string | null;
  handleSetPaymentIntent: (val: string | null) => void;
};

export interface Props {
  [propName: string]: any;
}

export const CartContext = createContext<CartContextTypes | null>(null);

export const CartContextProvider = (props: Props) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[] | null>(null);
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cartProducts: CartProduct[] | null = JSON.parse(cartItems);
    const eShopPaymentIntent: any = localStorage.getItem("eShopPaymentIntent");
    const paymentIntent: string | null = JSON.parse(eShopPaymentIntent);

    setCartProducts(cartProducts);
    setPaymentIntent(paymentIntent);
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );

        setCartTotalAmount(parseFloat(total.toFixed(2)));
        setCartTotalQty(qty);
      }
    };

    getTotals();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProduct) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      toast.success("Product added to cart");
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProduct) => {
      if (cartProducts) {
        console.log("cartP", cartProducts, product);
        const filteredProducts = cartProducts?.filter((item) => {
          return item.id !== product.id;
        });

        setCartProducts(filteredProducts);
        localStorage.setItem(
          "eShopCartItems",
          JSON.stringify(filteredProducts)
        );
        toast.success("Product removed");
      }
    },
    [cartProducts]
  );

  const handleCartQtyIncrease = useCallback(
    (product: CartProduct) => {
      let updatedCart;

      if (product.quantity === 20) {
        return toast.error("Oops! Maximum reached.");
      }

      if (cartProducts) {
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        updatedCart = [...cartProducts];

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartQtyDecrease = useCallback(
    (product: CartProduct) => {
      let updatedCart;

      if (product.quantity === 1) {
        return toast.error("Oops! Minimum reached.");
      }

      if (cartProducts) {
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        updatedCart = [...cartProducts];

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("eShopCartItems", JSON.stringify(null));
  }, [cartProducts]);

  const handleSetPaymentIntent = useCallback(
    (val: string | null) => {
      console.log("setting payment intent");
      setPaymentIntent(val);
      localStorage.setItem("eShopPaymentIntent", JSON.stringify(val));
    },
    [paymentIntent]
  );

  const value = {
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
    cartTotalQty,
    cartTotalAmount,
    paymentIntent,
    handleSetPaymentIntent,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
