import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Date } from '../atoms/Date';
import DoneButton from '../atoms/DoneButton';
import DoneButtonFrame from '../atoms/DoneButtonFrame';
import TaskTitle from '../atoms/TaskTitle';
import { TaskCardBox } from '../atoms/TaskCardBox';
import { doneTask } from '@/utils/api/doneTask';

export type TaskCardProps = {
    title: string;
    dueDate: string;
    toggleDoneTrue: (title: string, dueDate: string) => void;
    toggleDoneFalse: (title: string, dueDate: string) => void;
    isDone: boolean;
    deleteTask: (id: string) => void;
    type?: 'button' | 'submit' | 'reset';
    id: string;
};

export const TaskCard: React.VFC<TaskCardProps> = ({
    title,
    dueDate,
    toggleDoneTrue,
    toggleDoneFalse,
    isDone,
    deleteTask,
    id,
    type,
}) => {
    return (
        <div className="flex justify-center m-0">
            <TaskCardBox>
                <div className="flex items-center">
                    {isDone ? (
                        <DoneButtonFrame>
                            <DoneButton
                                onClick={() => toggleDoneFalse(title, dueDate)}
                            />
                        </DoneButtonFrame>
                    ) : (
                        <DoneButtonFrame
                            onClick={() => toggleDoneTrue(title, dueDate)}
                        />
                    )}
                    {isDone ? (
                        <del className="text-darkGray">
                            <TaskTitle>{title}</TaskTitle>
                        </del>
                    ) : (
                        <TaskTitle>{title}</TaskTitle>
                    )}
                </div>
                <div className="flex items-center">
                    <Date>{dueDate}</Date>
                    <Button id={id} type={type} onClick={deleteTask}>
                        Delete
                    </Button>
                </div>
            </TaskCardBox>
        </div>
    );
};
