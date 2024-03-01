import { useAuthSelector } from "@/hooks/useAuth";
import HabitsService from "@/services/habits.service";
import { useMutation, useQueryClient } from "react-query";

export function useDeleteHabit(taskId: string) {
    const queryClient = useQueryClient();
  
    const { user } = useAuthSelector();
  
    const { isLoading, mutate: deleteHabit } = useMutation({
      mutationKey: ["delete habit", taskId],
      mutationFn: () => {
        return HabitsService.deleteHabit(user!._id, taskId);
      },
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["habits"],
        });
      },
    });
  
    return { deleteHabit, isLoading };
  }
  