import React, {useEffect, useState} from "react";
import { getTaskList, TaskData } from "@/utils/api/getTasks";


export const useDueDateFiltering = (selectedDate: string, tasks: TaskData[], refresh: boolean) => {

    const [fileteredTask, setFilteredTask] = useState<TaskData[] | []>([]);


    useEffect(() => {
    async function fetchTasks() {
    try {
      const tasks = await getTaskList();

      return tasks

    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

      fetchTasks().then((tasks) => {

      if (tasks) {
        let filteredTasks = tasks;
        if (selectedDate) {
          const startDate = new Date(selectedDate);
          startDate.setHours(0, 0, 0, 0);

          const endDate = new Date(selectedDate);
          endDate.setHours(23, 59,59,999);

          filteredTasks = tasks.filter((task) => {
            const taskDate = new Date(task.dueDate);
            return taskDate >= startDate && taskDate <= endDate;
          })
          
          // タスクを日付が古い順にソート
        filteredTasks.sort((a, b) => {
          const dateA = new Date(a.dueDate);
          const dateB = new Date(b.dueDate);
          return dateA.getTime() - dateB.getTime();
        });

          setFilteredTask(filteredTasks)
        } else {
        

        // タスクを日付が古い順にソート
        filteredTasks.sort((a, b) => {
          const dateA = new Date(a.dueDate);
          const dateB = new Date(b.dueDate);
          return dateA.getTime() - dateB.getTime();
        });

        setFilteredTask(tasks)
        }
      };
      })
    },[selectedDate, tasks, refresh]);

    console.log(fileteredTask);
    return fileteredTask;
};

