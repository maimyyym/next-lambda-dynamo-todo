import React, {useState} from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { createTask } from "../../utils/api/createTask"
import { DateInput } from "../atoms/DateInput";

export type AddFormProps = {

};

export const AddForm: React.VFC<AddFormProps> = () => {
    const [title, setTitle] = useState<string | ''>('');
    const today = new Date();
    const [dueDate, setDueDate] = useState<string>(today.toString());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDueDate(event.target.value);
    };

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const done = false;

        try {
            const createTaskData = await createTask(title, dueDate, done);
            console.log(createTaskData);
        } catch(error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Input  
                type="text"
                name="title"
                id="title"
                value={title}
                placeholder="Add your task!"
                onChange={handleChange} />
                <input type="hidden" name="done" value="false" />
            <DateInput value={dueDate} onChange={handleChangeDate} />
            <Button type="submit">Add</Button>
            </form>
        </div>
       
    );
};


