import { useAuthSelector } from "@/hooks/useAuth";
import TasksService from "@/services/tasks.service";
import { TypeTaskFormState } from "@/types/tasks.type";
import { useMutation, useQueryClient } from "react-query";

export function useUpdateTask() {

  const { user } = useAuthSelector();
  const queryClient = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationKey: ["update task"],
    mutationFn: ({ data , taskId }: { data: TypeTaskFormState, taskId: string }) => {
      return TasksService.updateTask(user!._id, taskId, data);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { updateTask };
}
