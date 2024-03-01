import { useAuthSelector } from "@/hooks/useAuth"
import HabitsService from "@/services/habits.service"
import { TypeHabitFormState } from "@/types/habits.type"
import { ITasksResponse } from "@/types/tasks.type"
import { useMutation, useQueryClient } from "react-query"


export const useUpdateHabits = () => {

    const { user } = useAuthSelector();
    const queryClient = useQueryClient();

   const {mutate: updateHabit} = useMutation({
        mutationKey: ["update habits"],
        mutationFn: ({habit, taskId} : {habit: TypeHabitFormState, taskId: string}) => {
            return HabitsService.updateHabit(user!._id, taskId, habit)
        },
        onSuccess() {
            queryClient.invalidateQueries({
              queryKey: ["habits"],
            });
          },
   });

   return { updateHabit };
} 