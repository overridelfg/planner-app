import { axiosClassic } from "@/api/interceptors";
import { useAuthSelector } from "@/hooks/useAuth";
import { TypeTaskFormState, type ITasksResponse } from "@/types/tasks.type";
import { getStoreLocal } from "@/utils/local-storage";

export class TasksService {
  async getTasks(userId: string) {
    const response = await axiosClassic.get<ITasksResponse[] | undefined>(
      `tasks/all/${userId}`,
    );

    return response.data;
  }

  async createTask(userId: string, data: TypeTaskFormState) {
    const response = await axiosClassic.post<ITasksResponse>(
      `tasks/create/${userId}`,
      data,
    );

    return response.data;
  }

  async updateTask(userId: string, taskId: string, data: TypeTaskFormState) {
    const response = await axiosClassic.put<ITasksResponse>(
      `tasks/update/${userId}/${taskId}`,
      data,
    );

    return response.data;
  }

  async deleteTask(userId: string, taskId: string) {
    const response = await axiosClassic.delete<ITasksResponse>(
      `tasks/delete/${userId}/${taskId}`,
    );

    return response.data;
  }
}

export default new TasksService();
