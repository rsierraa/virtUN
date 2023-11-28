import getProductById from "@/actions/getProductById";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import NullData from "@/app/components/NullData";
import getCurrentUser from "@/actions/getCurrentUser";
import AddRating from "./AddRating";
import ListRatings from "./ListRating";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product) {
    return <NullData title="Oops! Product with the given id does not exist." />;
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="mt-20 flex flex-col gap-4">
          <AddRating user={user} product={product} />
          <ListRatings product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
