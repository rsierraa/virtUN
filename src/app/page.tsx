import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";


//Dinamically render:
interface HomeProps {
  searchParams: { page: string }
}

//server component: static caching
//1 is the default page value
export default async function Home({searchParams : {page = "1"}}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 6

  const totalItemCount = await prisma.product.count()

  //calculate the number of pages
  const totalPages = Math.ceil((totalItemCount) / pageSize)

  const products = await prisma.product.findMany({
    //order products by id in descending order, with the newest one on top
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });
  return (
    <div className="flex flex-col items-center">
      
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      {totalPages > 1 && (
      <PaginationBar currentPage={currentPage} totalPages={totalPages} onPageChange={function (page: number): void {
          throw new Error("Function not implemented.");
        } } />
      )}
    </div>
  );
}
