import React from "react";

export type DateInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
};

export const DateInput: React.VFC<DateInputProps> = ({ value, onChange }) => {
    return (
        <input type="datetime-local" value={value} onChange={onChange} className="p-0.5 m-1 text-xs rounded-lg w-800px focus:outline-none focus:border-2 focus:border-darkGray" />
      
    );
};

