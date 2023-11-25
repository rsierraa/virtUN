"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
    product: any
};

export type CartProductType ={
    id: string,
    name:string,
    description:string,
    category:string,
    image:string,
    quantity:number,
    price:number
}


const Horizontal = () => {
    return <hr className="w-[30%] my-2" />
}

const ProductDetails:React.FC<ProductDetailsProps> = 
({product}) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product._id,
        name: product.name,
        description: product.description,
        category: product.category,
        image: product.image,
        quantity: 1,
        price: product.price
    });

    const productRating = product.reviews.reduce((acc:number, item:any) => 
    item.rating + acc, 0) / product.reviews.length;

const handleQuantityIncrease = useCallback(() => {
    if(cartProduct.quantity === 12) return;
    setCartProduct((prev) => {
        return{ ...prev, quantity: ++prev.quantity};
    })
}, [cartProduct]);
const handleQuantityDecrease = useCallback(() => {
    if(cartProduct.quantity === 1) return;
    setCartProduct((prev) => {
        return{ ...prev, quantity: --prev.quantity};
    })    
}, [cartProduct]);

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product}/>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly/>
                    <div>{product.reviews.length} reseñas</div>
                </div>
                <Horizontal />
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div>
                    <span className="font-semibold">Categoría:</span> {product.category}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock ? "Disponible" : "Agotado"}
                </div>
                <Horizontal />
                <SetQuantity
                cartProduct={cartProduct}
                handleQuantityIncrease={handleQuantityIncrease}
                handleQuantityDecrease={handleQuantityDecrease}
                />
                <Horizontal />
                <div className="max-w-[300px]">
                    <Button
                        label="Agregar al carrito"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
     );
};
 
export default ProductDetails;