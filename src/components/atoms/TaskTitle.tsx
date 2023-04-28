import React, {ReactNode} from "react";

export type TaskTitleProps = {
    children: ReactNode;
};

export const TaskTitle: React.VFC<TaskTitleProps> = ({ children }) => {
    return (
        <p className="m-2 text-l text-darkBlack">{children}</p>
    );
};

export default TaskTitle;
