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
    icon,
    onClick
}) => {
    return ( <div>

    </div> );
}
 
export default Button;