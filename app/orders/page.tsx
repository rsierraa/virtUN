import Container from "@/app/components/Container";
import OrdersClient from "./OrderClient";
import getCurrentUser from "@/actions/getCurrentUser";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import NullData from "../components/NullData";

const Orders = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return <NullData title="Oops! Access denied." />;
  }

  const orders = await getOrdersByUserId(user.id);

  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
