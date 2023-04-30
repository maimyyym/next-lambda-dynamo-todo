import axios from "axios";

type TaskData = {
  title: string;
  dueDate: string;
  done: boolean;
};

export async function doneTask(title: string, dueDate: string, done: boolean): Promise<TaskData>{
  try {
    const response = await axios.put<TaskData>("url",{
      title,
      dueDate,
      done,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
      throw new Error("Failed...");
    }
}
