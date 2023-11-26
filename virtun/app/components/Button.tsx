"use client"

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom,
    icon: Icon,
    onClick
}) => {
    return ( <button
    onClick={onClick}
    disabled={disabled}
        className={`
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-md
            hover:opacity-80
            transition
            w-full
            border-slate-700
            flex
            items-center
            justify-center
            gap-2
            ${outline? "bg-white" : "bg-slate-700"}
            ${outline ? "text-slate-700" : "text-white"}
            ${small ? "px-2 py-1 text-sm border-[1px] font-light" : "px-4 py-2 text-md font-semibold border-2"}
            ${custom ? custom : ""}
            `}
    >
        {Icon && <Icon size={24}/>}

        {label}
    </button> );
}
 
export default Button;