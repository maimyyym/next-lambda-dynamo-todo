import React from "react";
import { TaskHeader } from "../molecules/TaskHeader";
import { TaskCard } from "../molecules/TaskCard";
import { TaskFooter } from "../molecules/TaskFooter";

export type TaskListProps = {

};

export const TaskList: React.VFC<TaskListProps> = () => {
    return (
        <div className="flex-row w-full h-full p-0 p-auto top-1/3 bg-lightPurple">
            <div className="relative flex-row w-3/4 pt-20 pb-10 mx-auto">
                <TaskHeader />
                <div className="flex-row w-full">
                <TaskCard />
                </div>
                <TaskFooter />
            </div>
        </div>
       
    );
};

