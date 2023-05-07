import React, { ReactNode } from 'react';

export type HomeTitleProps = {
    children: ReactNode;
};

export const HomeTitle: React.VFC<HomeTitleProps> = ({ children }) => {
    return <p className="text-2xl text-darkBlack">{children}</p>;
};
