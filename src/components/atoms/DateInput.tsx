import React, { useState } from 'react';
import { Button } from './Button';

export type DateInputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent) => void;
    handleDateInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DateInput: React.VFC<DateInputProps> = ({
    value,
    onChange,
    handleSubmit,
    handleDateInputChange,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                value={value}
                onChange={handleDateInputChange}
                className="p-0.5 m-1 text-xs rounded-lg w-800px focus:outline-none focus:border-2 focus:border-darkGray"
            />
        </form>
    );
};
