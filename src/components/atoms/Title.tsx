import React, {ReactNode} from "react";

export type TitleProps = {
    children: ReactNode;
};

export const Title: React.VFC<TitleProps> = ({ children }) => {
    return (
        <p className="text-2xl text-darkBlack">{children}</p>

    );
};

