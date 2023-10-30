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
          <label htmlFor={`rating-${product.id}-1`} className="sr-only">
            Rating 1
          </label>
          <input
            type="radio"
            id={`rating-${product.id}-1`}
            name={`rating-${product.id}`}
            value="1"
          />
          <label htmlFor={`rating-${product.id}-2`} className="sr-only">
            Rating 2
          </label>
          <input
            type="radio"
            id={`rating-${product.id}-2`}
            name={`rating-${product.id}`}
            value="2"
          />
          <label htmlFor={`rating-${product.id}-3`} className="sr-only">
            Rating 3
          </label>
          <input
            type="radio"
            id={`rating-${product.id}-3`}
            name={`rating-${product.id}`}
            value="3"
          />
          <label htmlFor={`rating-${product.id}-4`} className="sr-only">
            Rating 4
          </label>
          <input
            type="radio"
            id={`rating-${product.id}-4`}
            name={`rating-${product.id}`}
            value="4"
          />
          <label htmlFor={`rating-${product.id}-5`} className="sr-only">
            Rating 5
          </label>
          <input
            type="radio"
            id={`rating-${product.id}-5`}
            name={`rating-${product.id}`}
            value="5"
          />
        </div>

        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
