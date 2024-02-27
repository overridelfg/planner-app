import { useAuthSelector } from "@/hooks/useAuth";
import TasksService from "@/services/tasks.service";
import { TypeTaskFormState } from "@/types/tasks.type";
import { useMutation, useQueryClient } from "react-query";

export function useUpdateTask(taskId: string) {
    const queryClient = useQueryClient();

    const { user } = useAuthSelector();

    const {mutate: updateTask} = useMutation({
        mutationKey: ['update task', taskId],
        mutationFn: ({ data } : {data: TypeTaskFormState}) => {
            return TasksService.updateTask(user!._id, taskId, data)
        },
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            });
        }
    })

    return { updateTask }
    
}