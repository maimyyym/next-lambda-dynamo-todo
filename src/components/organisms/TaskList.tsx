import React, {useState} from "react";
import { TaskHeader } from "../molecules/TaskHeader";
import { TaskCard, TaskCardProps } from "../molecules/TaskCard";
import { TaskFooter } from "../molecules/TaskFooter";
import { tasks } from "../../utils/api/getTasks"


export const TaskList: React.VFC = () => {
  const [dateFilter, setDateFilter] = useState('')
    const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateFilter(e.target.value)
  }
    return (
        <div className="flex-row w-full p-0 h-2/3 p-auto bg-lightPurple">
            <div className="relative flex-row w-3/4 pt-20 pb-10 mx-auto">
                <TaskHeader value={dateFilter} onChange={dateChange}/>
                <div className="flex-row w-full">
                    {tasks.map((task: TaskCardProps, index: number) => (
                <TaskCard
                    key={index}
                    title={task.title}
                    dueDate={task.dueDate}
                    done={task.done} />
                    ))}
                </div>
                <TaskFooter />
            </div>
        </div>
       
    );
};

