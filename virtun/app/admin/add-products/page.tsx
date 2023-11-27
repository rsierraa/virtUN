import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddProductFrom from "./AddProductFrom";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const AddProducts = async() => {
  const currentUser = await getCurrentUser();
  if(!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="No autorizado :o" />
  }
  return <div className="p-8">
    <Container>
      <FormWrap>
        <AddProductFrom />
        </FormWrap>
    </Container>
    </div>;
};

export default AddProducts;
