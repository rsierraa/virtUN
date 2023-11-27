"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface ProductCardProps{
    data:any;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {

    const router = useRouter();

    const productRating = data.reviews.reduce((acc:number, item:any) => 
        item.rating + acc, 0) / data.reviews.length;
    

    return (
    <div
    onClick={() => {
        console.log(data);
        router.push(`/product/${data.id}`);
    }}
    className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
        <div className="
        flex
        flex-col
        w-full
        gap-1
        ">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image
                fill
                src={data.image}
                alt={data.name}
                className="w-full h-full object-contain"/>
            </div>
            <div className="mt-4">
                {truncateText(data.name)}
            </div>
            <div>
                <Rating value={productRating} readOnly />
            </div>
            <div>{data.reviews.length} reseñas</div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
    </div>
    );
};

export default ProductCard;