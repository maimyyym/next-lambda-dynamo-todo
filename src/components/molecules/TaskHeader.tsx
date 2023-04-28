import React from "react";
import { Title } from "../atoms/Title";
import { Date } from "../atoms/Date";
import { Button } from "../atoms/Button";

export type TaskHeaderProps = {

};

export const TaskHeader: React.VFC<TaskHeaderProps> = () => {
    return (
        <div className="flex items-center justify-between">
            <Title>Today's Task</Title>
            <div className="flex items-center">
            <Date>2023/04/22</Date>
            <Button>Show tasks</Button>
            </div>
        </div>
       
    );
};

