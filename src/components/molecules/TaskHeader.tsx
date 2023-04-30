import React from "react";
import { TaskListTitle } from "../atoms/TaskListTitle";
import { Button } from "../atoms/Button";
import { DateInput } from "../atoms/DateInput";

export type TaskHeaderProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;

};

export const TaskHeader: React.VFC<TaskHeaderProps> = ({ value, onChange }) => {
    return (
        <div className="flex items-center justify-between">
            <TaskListTitle>Today's Task</TaskListTitle>
            <div className="flex items-center">
                <DateInput value={value} onChange={onChange} />
                <Button>Show tasks</Button>
        </div>
       </div>
    );
};

