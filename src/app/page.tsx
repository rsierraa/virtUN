import Category from "@/components/Category";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

//server component: static caching
export default async function Home() {
  const products = await prisma.product.findMany({
    //order products by id in descending order, with the newest one on top
    orderBy: { id: "desc" },
  });
  return (
    <div style={{ padding: "138px" }}>
      <div className="hero rounded-xl bg-base-200">
        <div className="flex-col hero-content lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className="btn-primary btn"
            >
              Comprar
            </Link>
          </div>
        </div>
      </div>
      <div className="hero rounded-xl bg-base-200">
        {/* <Category productCard={products}/> */}
        <Category products={products} />
      </div>
      {/* <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div> */}
    </div>
  );
}
