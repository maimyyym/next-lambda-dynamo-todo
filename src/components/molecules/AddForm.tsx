import React, {useState} from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export type AddFormProps = {

};

export const AddForm: React.VFC<AddFormProps> = () => {
    const [task, setTask] = useState<string | ''>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    return (
        <div>
            <Input  
                type="text"
                name="task_title"
                id="text"
                value={task}
                placeholder="Add your task!"
                onChange={handleChange} />
            <Button>Add</Button>
        </div>
       
    );
};


