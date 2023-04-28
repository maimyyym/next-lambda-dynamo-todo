import React, {ReactNode} from "react";

export type TextProps = {
    children: ReactNode;
};

export const Text: React.VFC<TextProps> = ({ children }) => {
    return (
        <p className="text-sm text-lightGray">{children}</p>

    );
};

