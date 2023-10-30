import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

//we pass the product props to the component (name, description, price and image)
export default function ProductCard({ product }: ProductCardProps) {
    //if the product was created less than 3 days ago, we show a new badge!!
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 3;
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
          className="object-cover h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NUEVO</div>}
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
