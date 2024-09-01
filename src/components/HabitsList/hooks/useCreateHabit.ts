import { useAuthSelector } from "@/hooks/useAuth";
import HabitsService from "@/services/habits.service";
import TasksService from "@/services/tasks.service";
import { TypeHabitFormState } from "@/types/habits.type";
import { TypeTaskFormState } from "@/types/tasks.type";
import { useMutation, useQueryClient } from "react-query";

export function useCreateHabit() {
  const queryClient = useQueryClient();

  const { user } = useAuthSelector();

  const { mutate: createHabit } = useMutation({
    mutationKey: ["create habit"],
    mutationFn: ({ data }: { data: TypeHabitFormState }) => {
      return HabitsService.createHabit(user!._id, {
        ...data,
        userId: user!._id,
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["habits"],
      });
    },
  });

  return { createHabit };
}
