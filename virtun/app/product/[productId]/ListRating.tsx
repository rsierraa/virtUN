"use client";

import Heading from "@/app/components/Heading";

interface ListRatingProps {
    product: any,
}

const ListRating:React.FC<ListRatingProps> = ({product}) => {
    return  <div>
        <Heading title="Reseña" center={false}/>
        {/* */}
    </div> ;
}
 
export default ListRating;