import Link from "next/link";
import virtUN from "@/assets/virtUN.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";


async function searchProducts(formData: FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery") as string;

    if(searchQuery){
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar(){
    const cart = await getCart();
    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case">
                        <Image src={virtUN} alt="virtUN logo" width={40} height={40} />
                        
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input
                                name="searchQuery"
                                placeholder="Buscar"
                                className="input input-bordered w-full min-w-[400px]"
                            />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}/>
                </div>
            </div>
        </div>
    )
}