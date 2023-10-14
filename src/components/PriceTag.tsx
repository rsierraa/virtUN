import { formatPrice } from "@/lib/format";

//we pass the pricetag props to the component
interface PriceTagProps {
  price: number;
  //we can also pass a className prop to the component to style it from outside
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  //badge pricetag style from daisy ui
  return <span className={`badge ${className}`}> {formatPrice(price)}</span>;
}
