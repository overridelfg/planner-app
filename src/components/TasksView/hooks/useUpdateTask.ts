import TasksService from "@/services/tasks.service";
import { TypeTaskFormState } from "@/types/tasks.type";
import { useMutation, useQueryClient } from "react-query";

export function useUpdateTask(taskId: string) {
    const queryClient = useQueryClient();

    useMutation({
        mutationKey: ['update task', taskId],
        mutationFn: ({ userId, taskId, data } : {userId: string; taskId: string, data: TypeTaskFormState}) => {
            return TasksService.updateTask(userId, taskId, data)
        },
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            });
        }
    })
}