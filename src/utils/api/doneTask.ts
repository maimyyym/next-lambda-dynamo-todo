import axios from "axios";

type TaskData = {
  id: string;
  title: string;
  dueDate: string;
  done: boolean;
};

export async function doneTask(id: string, done: boolean): Promise<TaskData>{
  try {
    const response = await axios.put<TaskData>(`https://oiljcpqwff.execute-api.ap-northeast-1.amazonaws.com/task/${id}`,{
      done,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
      throw new Error("Failed...");
    }
}
