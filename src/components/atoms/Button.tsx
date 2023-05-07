import React, {ReactNode} from "react";

export type Props = {
    children: ReactNode;
    onClick?: (id: string)=>void;
    type?: "button" | "submit" | "reset";
    id?: string;
}

export const Button: React.VFC<Props> = ({ children, onClick, type, id }) => {
    return (
        <button className="w-20 px-1 py-1 m-2 text-xs font-semibold text-white rounded-lg bg-darkGray" 
            onClick={() => onClick && onClick(id)} type={type}>{children}</button>

    );
};

