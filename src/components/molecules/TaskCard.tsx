import React, {useState} from "react";
import { Button } from "../atoms/Button";
import { Date } from "../atoms/Date";
import DoneButton from "../atoms/DoneButton";
import DoneButtonFrame from "../atoms/DoneButtonFrame";
import TaskTitle from "../atoms/TaskTitle";
import { TaskCardBox } from "../atoms/TaskCardBox";
import { doneTask } from "../../utils/api/doneTask";

export type TaskCardProps = {
  title: string;
  dueDate: string;
  done: boolean;
};

export const TaskCard: React.VFC<TaskCardProps> = ({
  title,
  dueDate,
  done
}) => {
  const [isDone, setIsDone] = useState(done);

  const toggleDoneTrue = () => {
    setIsDone(true);
    try {
      const doneTaskData = doneTask(title, dueDate, isDone);
    } catch(error) {
      console.log(error.message);
    }
  };

  const toggleDoneFalse = () => {
    setIsDone(false);
    try {
      const doneTaskData = doneTask(title, dueDate, isDone);
    } catch(error) {
      console.log(error.message);
    }

  };

    return (
      <div className="flex justify-center m-0">
        <TaskCardBox>
          <div className="flex items-center">
            { isDone ? (<DoneButtonFrame ><DoneButton onClick={toggleDoneFalse} /></DoneButtonFrame>
                       ) : ( <DoneButtonFrame onClick={toggleDoneTrue} /> )}
          { isDone ? (
            <del className="text-darkGray">
        <TaskTitle>{title}</TaskTitle>
            </del>
          ) : (
            <TaskTitle>{title}</TaskTitle>
          )
            }
            </div>
          <div className="flex items-center">
            <Date>{dueDate}</Date>
        <Button>Edit</Button>
            </div>
        </TaskCardBox>
      </div>

    );
};
