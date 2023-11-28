"use client";

import { Order } from "@prisma/client";
import OrderItem from "./OrderItem";
import Heading from "@/app/components/Heading";
import { formatPrice } from "@/utils/formatPrice";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Order Details" />
      </div>
      <div>Order ID: {order.id}</div>
      <div>
        Total Amount:{" "}
        <span className="font-bold">{formatPrice(order.amount)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div>Payment status:</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
            <Status
              text="completed"
              icon={MdDone}
              bg="bg-teal-200"
              color="text-teal-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>Delivery status:</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="dispatched"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              text="delivered"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>Date: {moment(order.createdDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Products Ordered</h2>
        <div
          className="grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        "
        >
          <div className="col-span-2 justify-self-start">PRODUCT</div>
          <div className="justify-self-center">PRICE</div>
          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
          {order.products &&
            order.products.map((item) => {
              return <OrderItem key={item.id} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
