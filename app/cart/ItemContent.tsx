"use client";

import { truncateText } from "@/utils/truncateText";
import { CartProduct } from "../product/[productId]/ProductDetails";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import Link from "next/link";

interface ItemContentProps {
  item: CartProduct;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();

  return (
    <div
      className="grid
      grid-cols-5
      text-xs
      md:text-sm
      gap-4
      border-t-[1.5px]
      border-slate-200
      py-4
      items-center"
    >
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div
            className="
              relative
              w-[70px]
              aspect-square
            "
          >
            <Image
              src={item.selectedImage.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImage.color}</div>
          <div className="w-[70px]">
            <button
              className="text-slate-500 underline"
              onClick={() => handleRemoveProductFromCart(item)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">${item.price.toFixed(2)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => {
            handleCartQtyIncrease(item);
          }}
          handleQtyDecrease={() => {
            handleCartQtyDecrease(item);
          }}
        />
      </div>
      <div className="justify-self-end font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default ItemContent;
