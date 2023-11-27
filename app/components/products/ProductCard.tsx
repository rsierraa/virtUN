"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import { Product, Review } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product & {
    reviews: Review[];
  };
  shuffledProducts: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  data,
  shuffledProducts,
}) => {
  console.log("shuffledProducts", shuffledProducts);
  const router = useRouter();

  const ProductRating =
    data.reviews.reduce((acc, item) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="
        col-span-1
        cursor-pointer
        border-[1.2px]
        border-slate-200
        bg-slate-50
        rounded-md
        p-2
        transition
        hover:scale-105
        text-center
        text-sm
      "
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div
          className="
            aspect-square
            overflow-hidden
            relative
            w-full
            "
        >
          <Image
            fill
            className="
            w-full
            h-full
            object-contain
            "
            src={data.images[0].image}
            alt={data.name}
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <Rating value={ProductRating} readOnly />
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
