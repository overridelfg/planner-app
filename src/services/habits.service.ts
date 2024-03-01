import { axiosClassic } from "@/api/interceptors";
import { IHabitsResponse, TypeHabitFormState, UpdateOrderDTO } from "@/types/habits.type";
import axios from "axios";

class HabitsService {

    async getHabits(userId: string) {
        const response = await axiosClassic.get<IHabitsResponse[] | undefined>(`habits/all/${userId}`);
        return response.data;
    }
    async createHabit(userId: string, data: TypeHabitFormState) {
        const response = await axiosClassic.post<TypeHabitFormState>(`habits/create/${userId}`, data);
        return response.data;
    }

    async updateHabit(userId: string, taskId: string, data: TypeHabitFormState) {
        const response = await axiosClassic.put<TypeHabitFormState>(`habits/update/${userId}/${taskId}`, data);
        return response.data;
    }

    async updateHabitOrder(userId: string, data: {ids: number[], tasksIds: string[]}) {
        const response = await axiosClassic.put<{ids: number[]}>(`habits/updateOrder/${userId}`, data);
        return response.data;
    }

    async deleteHabit(userId: string, taskId: string) {
        const response = await axiosClassic.delete(`habits/delete/${userId}/${taskId}`);
        return response.data;
    }


}

export default new HabitsService();