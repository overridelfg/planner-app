import { useAuthSelector } from "@/hooks/useAuth";
import TasksService from "@/services/tasks.service";
import { TypeTaskFormState } from "@/types/tasks.type";
import { useMutation, useQueryClient } from "react-query";

export function useCreateTask() {
  const queryClient = useQueryClient();

  const { user } = useAuthSelector();

  const { mutate: createTask } = useMutation({
    mutationKey: ["create task"],
    mutationFn: ({ data }: { data: TypeTaskFormState }) => {
      return TasksService.createTask(user!._id, data);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { createTask };
}
