"use client";

import { IconType } from "react-icons";

interface StatusProps {
  text: string;
  icon: IconType;
  bg: string;
  color: string;
}

const Status: React.FC<StatusProps> = ({ text, icon: Icon, bg, color }) => {
  return (
    <div
      className={`${bg}
        px-1
        rounded
        flex
        items-center
        gap-1
        ${color}`}
    >
      {text} <Icon size={15} />
    </div>
  );
};

export default Status;
