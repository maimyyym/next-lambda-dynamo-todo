import axios from "axios"

type TaskData = {
  title: string;
  dueDate: string;
};

export async function createTask(title: string, dueDate: string): Promise<TaskData>{
  console.log(title);
  console.log(dueDate);
  console.log(typeof(title));
  console.log(typeof(dueDate));
  try {
    const response = await axios.post<TaskData>("https://oiljcpqwff.execute-api.ap-northeast-1.amazonaws.com/task",{
      title,
      dueDate,
    });
    console.log(response.data)

    return response.data;
  } catch (error) {
    console.log(error.message);
      throw new Error("Failed...");
    }
}
