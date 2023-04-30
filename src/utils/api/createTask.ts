import axios from "axios";

type TaskData = {
  title: string;
  dueDate: string;
  done: boolean;
};

export async function createTask(title: string, dueDate: string, done: boolean): Promise<TaskData>{
  try {
    const response = await axios.post<TaskData>("https://oiljcpqwff.execute-api.ap-northeast-1.amazonaws.com/tasks",{
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
