import React from "react";
import { Button } from "../atoms/Button";
import { Date } from "../atoms/Date";
import DoneButton from "../atoms/DoneButton";
import DoneButtonFrame from "../atoms/DoneButtonFrame";
import TaskTitle from "../atoms/TaskTitle";
import { TaskCardBox } from "../atoms/TaskCardBox";

export type TaskCardProps = {

};

export const TaskCard: React.VFC<TaskCardProps> = () => {
    return (
      <div className="flex justify-center m-0">
        <TaskCardBox>
          <div className="flex items-center">
            <DoneButtonFrame>
          <DoneButton />
        </DoneButtonFrame>
        <TaskTitle>tasktitle</TaskTitle>
            </div>
          <div className="flex items-center">
            <Date>2023/04/22</Date>
        <Button>Edit</Button>
            </div>
        </TaskCardBox>
      </div>

    );
};

