import React, {ReactNode} from "react";

export type TaskCardBoxProps = {
    children: ReactNode;
};

export const TaskCardBox: React.VFC<TaskCardBoxProps> = ({ children }) => {
    return (
        <div className="flex justify-between w-full h-10 p-2 bg-white rounded-lg border-l-6 border-lightGray">
            {children}
        </div>
       
    );
};

