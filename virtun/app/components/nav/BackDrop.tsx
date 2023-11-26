import React from "react";

interface BackDropProps {
  onClick: () => void;
}
const BackDrop: React.FC<BackDropProps> = ({onClick}) => {
  return ( <div onClick={onClick} className="fixed inset-0 bg-slate-200 opacity-50 z-20 w-screen h-screen top-0 left-0 "></div> );
}

export default BackDrop;