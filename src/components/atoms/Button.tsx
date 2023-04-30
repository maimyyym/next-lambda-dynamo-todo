import React, {ReactNode} from "react";

export type Props = {
    children: ReactNode;
    onClick?: ()=>void;
    type?: "button" | "submit" | "reset";
}

export const Button: React.VFC<Props> = ({ children, onClick, type }) => {
    return (
        <button className="w-20 px-1 py-1 m-2 text-xs font-semibold text-white rounded-lg bg-darkGray" 
            onClick={onClick} type={type}>{children}</button>

    );
};

