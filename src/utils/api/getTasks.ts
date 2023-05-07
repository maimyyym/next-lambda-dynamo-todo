import axios from "axios"
import {useState} from "react";

export type TaskData = {
  title: string;
  dueDate: string;
  createdAt: string;
  done: boolean;
  id: string;
  updatedAt: string;
};

type TaskListData = TaskData[];

export async function getTaskList(): Promise<TaskListData>{


  try {
    const response = await axios.get<TaskListData>("https://oiljcpqwff.execute-api.ap-northeast-1.amazonaws.com/task");
    console.log(response.data)
    const tasks = response.data;
    return tasks;
  } catch (error) {
    console.log(error.message);
      throw new Error("Failed...");
    }
}






