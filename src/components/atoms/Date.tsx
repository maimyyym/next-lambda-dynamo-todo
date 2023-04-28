import React, {ReactNode} from "react";

export type DateProps = {
    children:ReactNode;
}

export const Date: React.VFC<DateProps> = ({ children }) => {
    return (
        <p className="text-xs text-lightGray">{children}</p>
    );
};

