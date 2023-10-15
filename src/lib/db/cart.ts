//database operations for cart that we want to reuse in other places

import { cookies } from "next/dist/client/components/headers";
import { prisma } from "./prisma";
import { Cart, Prisma } from "@prisma/client";


//tipos
export type CarritoConProductos = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
    include: {product: true}
}>;


export type CarritoDeCompra = CarritoConProductos & {
    size: number;
    subtotal: number;
}

export async function createCart() :Promise<CarritoDeCompra>{
    const newCart = await prisma.cart.create({
        data: {}
    })

    // nota: necesita encriptación + seguridad en una app real
    cookies().set("localCartId", newCart.id);

    return {
        ...newCart,
        items: [],
        size: 0,
        subtotal: 0
    }
}

export async function getCart(): Promise<CarritoDeCompra | null>{
    const localCartId = cookies().get("localCartId")?.value;
    //find a cart by its id
    const cart = localCartId ? await prisma.cart.findUnique({
        where: {id: localCartId},
        //include the product info into the cart
        include: {items: {include: {product: true}}}
    })
    : null;

    if(!cart){
        return null;

    }
    return{
        ...cart,
        size: cart.items.reduce((acc, item) => acc + item.quantity, 0), //goes through every element and accumulates to the total
        subtotal: cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    }
}