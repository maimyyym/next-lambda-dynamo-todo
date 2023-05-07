import React, {useState} from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { createTask } from "../../utils/api/createTask"
import { DateInput } from "../atoms/DateInput";

export type AddFormProps = {
    type: string
    name: string
    id: string
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const AddForm: React.VFC<AddFormProps> = ({ type, name, id, value, handleChange, handleChangeDate, handleSubmit }) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Input  
                type={type}
                name={name}
                id={id}
                value={value}
                placeholder="Add your task!"
                onChange={handleChange} />
                <input type="hidden" name="done" value="false" />
        <input type="date"  onChange={handleChangeDate} className="p-0.5 m-1 text-xs rounded-lg w-800px focus:outline-none focus:border-2 focus:border-darkGray" />
            <Button type="submit">Add</Button>
                      </form>

        </div>
       
    );
};


