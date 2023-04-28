import React, {ReactNode} from "react";

export type Props = {
    children: ReactNode;
}

export const Button: React.VFC<Props> = ({ children }) => {
    return (
        <button className="w-20 px-1 py-1 m-2 text-xs font-semibold text-white rounded-lg bg-darkGray">{children}</button>

    );
};

