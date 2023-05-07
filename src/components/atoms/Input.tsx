import React from 'react';

export type InputProps = {
    type: string;
    name: string;
    id?: string;
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.VFC<InputProps> = ({
    type,
    name,
    id,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="p-1 text-xs rounded-lg w-800px focus:outline-none focus:border-2 focus:border-darkGray"
        />
    );
};
