import React, {useState} from "react";
import { TaskListTitle } from "../atoms/TaskListTitle";
import { Button } from "../atoms/Button";
import { DateInput } from "../atoms/DateInput";

export type TaskHeaderProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;

};

export const TaskHeader: React.VFC<TaskHeaderProps> = ({ value, onChange }) => {
    const [dateInput, setDateInput] = useState('');

    const handleDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateInput(event.target.value);
        onChange(event);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onChange({
        target: { value: dateInput }
        } as React.ChangeEvent<HTMLInputElement>);
    }

    return (
        <div className="flex items-center justify-between">
            <TaskListTitle>Today's Task</TaskListTitle>
            <div className="flex items-center">
                <DateInput
                value={dateInput}
                onChange={onChange}
                handleSubmit={handleSubmit}
                handleDateInputChange={handleDateInputChange}/>
        </div>
       </div>
    );
};

