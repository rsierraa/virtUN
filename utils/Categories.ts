import {
  AiFillMobile,
  AiOutlineDesktop,
  AiOutlineLaptop,
} from "react-icons/ai";
import { MdOutlineKeyboard, MdStorefront, MdTv, MdWatch } from "react-icons/md";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "Phone",
    icon: AiFillMobile,
  },
  {
    label: "Laptop",
    icon: AiOutlineLaptop,
  },
  {
    label: "Desktop",
    icon: AiOutlineDesktop,
  },
  {
    label: "Watch",
    icon: MdWatch,
  },
  {
    label: "TV",
    icon: MdTv,
  },
  {
    label: "Accesories",
    icon: MdOutlineKeyboard,
  },
];
