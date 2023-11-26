"use client";

import { CartProductType } from "@/app/product/[productId]/productDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product
}) => {
    return ( <div className="col-span-5 relative aspect-square">
        <Image fill src={cartProduct.image} alt={cartProduct.name} className="w-full
        h-full
        object-contain
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
        "/>
    </div> );
}
 
export default ProductImage;