import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Agregar Producto - VirtUN",
};

//nextjs experimental server action :)
async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  //lets receive the imageid from the user and parse it to the full public Drive link
  //const imageId = formData.get("imageId")?.toString();
  //const imageUrl = imageId ? `https://drive.google.com/uc?id=${imageId}` : undefined;
  const price = Number(formData.get("price") || 0);
  const category = formData.get("category")?.toString();

  // client side validations:
  if (!name || !description || !imageUrl || !price || !category) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
      category,
    },
  });

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  // All those mb-3 etc are Tailwind CSS classes ;)
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="w-full mb-3 input-bordered input"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="w-full mb-3 textarea-bordered textarea"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="w-full mb-3 input-bordered input"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="w-full mb-3 input-bordered input"
        />
        <div className="flex items-center gap-2 my-1">
          Categoria:
          <select
            className="select-bordered select w-full max-w-[150px]"
            name="category"
            defaultValue={"Entrada"}
            >
            <option value={"Entradas"}>Entradas</option>
            <option value={"Platos fuertes"}>Platos fuertes</option>
            <option value={"Postres"}>Postres</option>
            <option value={"Bebidas"}>Bebidas</option>
          </select>
        </div>
        <FormSubmitButton className=" btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
