import axios from "axios";

type TaskData = {
  id: string;
};

export async function deleteTask(id: string): Promise<TaskData>{
  console.log(id);
  try {
    const response = await axios.delete<TaskData>(`https://oiljcpqwff.execute-api.ap-northeast-1.amazonaws.com/task/${id}`);

    return response.data;
  } catch (error) {
      throw new Error("Failed...");
    }
}
