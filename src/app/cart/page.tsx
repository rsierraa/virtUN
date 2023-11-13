import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";
import handler from "../checkout/CheckoutClient";

export const metadata = {
    title: "Carrito de Compras - VirtUN",
}

export default async function CartPage(){
    const cart = await getCart();
    return(
        <div>
            <h1 className="mb-6 text-3xl font-bold">Carrito de Compras</h1>
            {cart?.items.map(cartItem => (
                <CartEntry cartItem={cartItem} key={cartItem.product.id} setProductQuantity={setProductQuantity}/>
            ))}
            {!cart?.items.length && <p className="text-xl">No hay productos en el carrito</p>}
            <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">
                    Total: {formatPrice(cart?.subtotal || 0)}
                </p>
                <button  className="btn btn-primary btn-block sm:w-[200px]">Pagar</button>
            </div>
        </div>
    )
}