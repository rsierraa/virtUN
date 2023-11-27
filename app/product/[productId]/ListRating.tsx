"use client";

import Heading from "@/app/components/Heading";
import Avatar from "@/app/components/navbar/Avatar";
import { Rating } from "@mui/material";
import { Product, Review } from "@prisma/client";
import moment from "moment";

interface ListRatingProps {
  product: Product & {
    reviews: Review[];
  };
}

const ListRatings: React.FC<ListRatingProps> = ({ product }) => {
  if (!product.reviews || product.reviews.length === 0) return null;

  return (
    <div>
      <Heading title="Product Reviews" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div className="flex gap-2 items-center">
                  <Avatar src={review?.user.image} />
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                  <div className="ml-2">{review.comment}</div>
                </div>
                <hr className="mt-4 mb-4" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRatings;
