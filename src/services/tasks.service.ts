import { axiosClassic } from "@/api/interceptors";
import { useAuthSelector } from "@/hooks/useAuth";
import { TypeTaskFormState, type ITasksResponse } from "@/types/tasks.type";
import { getStoreLocal } from "@/utils/local-storage";

export class TasksService {
  async getTasks(userId: string) {

    const response = await axiosClassic.get<ITasksResponse[] | undefined>(`tasks/all/${userId}`);

    return response.data;
  }

  async createTask() {
    const response = await axiosClassic.post<ITasksResponse>("tasks/create");

    return response.data;
  }

  async updateTask(taskId: string, userId: string, data: TypeTaskFormState) {
    const response = await axiosClassic.put<ITasksResponse>(`auth/update${userId}/${taskId}`, data);

    return response.data;
  }

  async deleteTask() {
    const response = await axiosClassic.delete<ITasksResponse>("auth/delete");;

    return response.data;
  }
}

export default new TasksService();
