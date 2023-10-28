import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import Category from "@/components/Category";
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
      <div className="hero rounded-xl bg-base-200">
        <Category products={products} />
      </div>
      {totalPages > 1 && (
      <PaginationBar currentPage={currentPage} totalPages={totalPages} onPageChange={function (page: number): void {
          throw new Error("Function not implemented.");
        } } />
      )}
    </div>
  );
}