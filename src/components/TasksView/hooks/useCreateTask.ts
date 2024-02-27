import TasksService from "@/services/tasks.service";
import { TypeTaskFormState } from "@/types/tasks.type";
import { useMutation, useQueryClient } from "react-query";

export function useCreateTask() {
  const queryClient = useQueryClient();

  const { mutate: createTask } = useMutation({
    mutationKey: ["create task"],
    mutationFn: ({
      userId,
      data,
    }: {
      userId: string;
      data: TypeTaskFormState;
    }) => {
      return TasksService.createTask(userId, data);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { createTask };
}
