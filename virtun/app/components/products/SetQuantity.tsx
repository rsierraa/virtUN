"use client"

import { CartProductType } from "@/app/product/[productId]/productDetails";

interface SetQuantityProps {
        cartCounter?: boolean;
        cartProduct?: CartProductType;
        handleQuantityIncrease: () => void;
        handleQuantityDecrease: () => void;        
    }

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity: React.FC<SetQuantityProps> = ({
    cartCounter,
    cartProduct,
    handleQuantityIncrease,
    handleQuantityDecrease,
}) => {
    return ( 
        <div className="flex gap-8 items-center">
            {cartCounter ? null : <div
            className="font-semibold">CANTIDAD:</div>}
            <div className="flex gap-4 items-center text-base">
                <button onClick={handleQuantityDecrease} className={btnStyles}>-</button>
                <div>{cartProduct ? cartProduct.quantity : 'Loading...'}</div>
                <button onClick={handleQuantityIncrease} className={btnStyles}>+</button>
            </div>
        </div>
     );
}
 
export default SetQuantity;