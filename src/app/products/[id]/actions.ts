"use server";

import { getCart, createCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  //fetch the cart or create one if it doesn't exist
  const cart = (await getCart()) ?? (await createCart());
  // item.productId comes from the database schema
  const articleInCart = cart.items.find((item) => item.productId === productId);

  if (articleInCart) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          update: {
            where: { id: articleInCart.id },
            data: { quantity: { increment: 1 } },
          },
        },
      },
    });
  } else {
    await prisma.cart.update({
      where: { id: cart.id },
      data: { items: { create: { productId, quantity: 1 } } },
    });
  }
  //refetch the latest data from the server
  //path same as in our folder structure
  revalidatePath("/products/[id]");
}
