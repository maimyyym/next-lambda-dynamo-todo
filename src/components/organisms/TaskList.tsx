import React, { useState, useEffect } from 'react';
import { TaskHeader } from '../molecules/TaskHeader';
import { TaskCard } from '../molecules/TaskCard';
import { getTaskList } from '../../utils/api/getTasks';
import { doneTask } from '@/utils/api/doneTask';
import { useDueDateFiltering } from '@/hooks/useDueDateFiltering';
import { deleteTask } from '@/utils/api/deleteTask';
import { createTask } from '@/utils/api/createTask';
import { AddForm } from '../molecules/AddForm';
import { HeaderText } from '../molecules/HeaderText';

type taskData = {
    id: string;
    title: string;
    dueDate: string;
    done: boolean;
    createdAt: string;
    updatedAt: string;
};

export const TaskList: React.VFC = () => {
    const [tasks, setTasks] = useState<taskData[] | []>([]);
    const [dateFilter, setDateFilter] = useState('');
    const [refresh, setRefresh] = useState(false);
    const filteredTask = useDueDateFiltering(dateFilter, tasks, refresh);

    // タスクデータの取得、配列に格納
    useEffect(() => {
        async function fetchTasks() {
            try {
                const fetchedTasks = await getTaskList();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
        fetchTasks();
    }, [refresh]);

    // AddForm関連
    const [title, setTitle] = useState<string | ''>('');
    const today = new Date();
    const [dueDate, setDueDate] = useState<string>(today.toString());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDueDate(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //const done = false;

        try {
            const createTaskData = await createTask(title, dueDate);
            setTasks(await getTaskList());
            setRefresh(!refresh);
        } catch (error) {
            console.log(error.message);
        }
    };

    // dueDateのフィルター：日付をセット
    const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateFilter(e.target.value);
    };

    // 完了フラグのオンオフ
    const toggleDoneTrue = async (id: string) => {
        try {
            const doneTaskData = doneTask(id, true);
            setTasks(await getTaskList());
            setRefresh(!refresh);
        } catch (error) {
            console.log(error.message);
        }
    };

    const toggleDoneFalse = async (id: string) => {
        try {
            const doneTaskData = doneTask(id, false);
            setTasks(await getTaskList());
            setRefresh(!refresh);
        } catch (error) {
            console.log(error.message);
        }
    };

    // タスクの削除
    const handleDeleteTask = async (id: string) => {
        try {
            const deleteTaskData = deleteTask(id);
            setTasks(await getTaskList());
            setRefresh(!refresh);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="flex-row w-full h-56 p-8 pb-4 bg-lightBlue">
                <HeaderText />
                <AddForm
                    type="text"
                    name="title"
                    id="name"
                    value={title}
                    handleChange={handleChange}
                    handleChangeDate={handleChangeDate}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="flex-row w-full p-0 h-2/3 p-auto bg-lightPurple">
                <div className="relative flex-row w-3/4 pt-20 pb-10 mx-auto">
                    <TaskHeader value={dateFilter} onChange={dateChange} />
                    <div className="flex-row w-full">
                        {filteredTask.map((task: taskData, index: number) => (
                            <TaskCard
                                key={index}
                                title={task.title}
                                dueDate={task.dueDate}
                                toggleDoneTrue={() => toggleDoneTrue(task.id)}
                                toggleDoneFalse={() => toggleDoneFalse(task.id)}
                                isDone={task.done}
                                deleteTask={() => handleDeleteTask(task.id)}
                                id={task.id}
                                type="submit"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
