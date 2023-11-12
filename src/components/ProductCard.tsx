import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";
import {Rating} from "@mui/material";
interface ProductCardProps {
  product: Product;
}

//we pass the product props to the component (name, description, price and image)
export default function ProductCard({ product }: ProductCardProps) {
//product rating calculation
//  const productRating = product.reviews.reduce((acc:number, item:any) => item.rating + acc, 0) /product.reviews.length


  //if the product was created less than 3 days ago, we show a new badge!!
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 3;
  return (
    <Link
      href={`/products/${product.id}`}
      className="card w-full  bg-base-100 transition-shadow hover:scale-110"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NUEVO</div>}
        <div>
          <Rating value={3} readOnly />
          {/* <Rating value={productRating} readOnly /> */}
        </div>
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
