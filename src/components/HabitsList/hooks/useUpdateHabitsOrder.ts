import { useAuthSelector } from "@/hooks/useAuth";
import HabitsService from "@/services/habits.service";
import { UpdateOrderDTO } from "@/types/habits.type";
import { useMutation, useQueryClient } from "react-query";



export const useUpdateHabitsOrder = () => {
    const { user } = useAuthSelector();
    const queryClient = useQueryClient();

   const {mutate: updateHabitsOrder} = useMutation({
        mutationKey: ["update order habits"],
        mutationFn: (data : {ids: number[], tasksIds: string[]}) => {
            return HabitsService.updateHabitOrder(user!._id, data)
        },
        onSuccess() {
            queryClient.invalidateQueries({
              queryKey: ["habits"],
            });
          },
   });

   return { updateHabitsOrder };
}