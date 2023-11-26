import { CartProductType } from "@/app/product/[productId]/productDetails";
import { set } from "mongoose";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQuantityIncrease: (product: CartProductType) => void;
    handleCartQuantityDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShopCartItems');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);

        setCartProducts(cProducts);
    }, []);

    useEffect(() => {
        const getTotals = () => {
            if(cartProducts){
                const {total, qty} = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.price * item.quantity;
                    acc.total += itemTotal;
                    acc.qty += item.quantity;
    
                    return acc;
                }, {
                    total: 0,
                    qty: 0
                });
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }

        }
        getTotals();
    }, [cartProducts]);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if(prev){
                updatedCart = [...prev, product];
            }else{
                updatedCart = [product];
            }
            toast.success("Producto agregado al carrito");
            localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
            return updatedCart;
        })
    }, []);

    const handleRemoveProductFromCart = useCallback((product: CartProductType
    ) => {
        if(cartProducts){
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id;
            
            })
            setCartProducts(filteredProducts);
            toast.success("Producto borrado del carrito");
            localStorage.setItem("eShopCartItems", JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const handleCartQuantityIncrease = useCallback((product: CartProductType) => {
        let updatedCart;

        if(product.quantity === 12){
            return toast.error("No puedes pedir más de 12 productos a la vez!");
        }

        if(cartProducts){
            updatedCart = [...cartProducts];

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id
            );
            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity;
            }

            setCartProducts(updatedCart);
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
        }
    }, 
    [cartProducts]
    );

    const handleCartQuantityDecrease = useCallback((product: CartProductType) => {
        let updatedCart;

        if(product.quantity === 1){
            return toast.error("No puedes pedir menos de 1 producto!");
        }

        if(cartProducts){
            updatedCart = [...cartProducts];

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id
            );
            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity;
            }

            setCartProducts(updatedCart);
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
        }
    }, 
    [cartProducts]
    );

    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem('eShopCartItems', JSON.stringify(null));
    }, [cartProducts]);

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQuantityIncrease,
        handleCartQuantityDecrease,
        handleClearCart
    }

    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () => {
    const context = useContext(CartContext);

    if(context === null) {
        throw new Error('useCart must be used within a CartContextProvider');
    }

    return context;
}