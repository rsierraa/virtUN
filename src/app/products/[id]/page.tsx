import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import PriceTag from "@/components/PriceTag";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddProductPage from "@/app/add-product/page";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
    params: {
        id: string;
    };
}

//in order to deduplicate the metadata generation, we use a React function for this: we use the cache function from react-query to cache the product data and the metadata in memory so that we don't have to fetch it twice
const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) notFound();
    return product;
})



//an async function because we need to fetch the product from the database twice: once to get the product data and another to get the metadata
export async function generateMetadata({
  params: {id}}: ProductPageProps
): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " - VirtUN",
    description: product.description,
    openGraph: {
        images: [{ url: product.imageUrl }],
    }
  }
}

export default async function ProductPage({params: {id}}: ProductPageProps) {
    
    const product = await getProduct(id);

    return(
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
                priority
            />
            <div>
                <h1 className="text-5xl font-bold">{product.name}</h1>
                <PriceTag price={product.price} className="mt-4" />
                <p className="py-6">{product.description}</p>
                <AddToCartButton productId={product.id} incrementProductQuantity={incrementProductQuantity}/>
            </div>
        </div>
    );
}