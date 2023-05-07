import React, { ReactNode } from 'react';

export type TaskListTitleProps = {
    children: ReactNode;
};

export const TaskListTitle: React.VFC<TaskListTitleProps> = ({ children }) => {
    return <p className="text-2xl text-white">{children}</p>;
};
