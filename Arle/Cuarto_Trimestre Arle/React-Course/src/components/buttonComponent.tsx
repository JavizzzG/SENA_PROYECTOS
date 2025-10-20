import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "primary" | "secondary";
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    className?: string;
    style?: React.CSSProperties
}

export function Button({
    
})