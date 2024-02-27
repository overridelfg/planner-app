import { useAuthSelector } from "@/hooks/useAuth";
import TasksService from "@/services/tasks.service";
import { TypeTaskFormState } from "@/types/tasks.type";
import { useMutation, useQueryClient } from "react-query";

export function useDeleteTask(taskId: string) {
  const queryClient = useQueryClient();

  const { user } = useAuthSelector();

  const { isLoading, mutate: deleteTask } = useMutation({
    mutationKey: ["delete task", taskId],
    mutationFn: ({}: {}) => {
      return TasksService.deleteTask(user!._id, taskId);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { deleteTask, isLoading };
}
