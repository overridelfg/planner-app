import { useAuthSelector } from "@/hooks/useAuth";
import HabitsService from "@/services/habits.service";
import { IHabitsResponse } from "@/types/habits.type";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export const useHabits = () => {

    const { user } = useAuthSelector();
    const [habitsList, setHabitsList] = useState<IHabitsResponse[] | undefined>();
  
    const { data } = useQuery({
      queryKey: ["habits"],
      queryFn: () => HabitsService.getHabits(user!._id),
    });
  
    useEffect(() => {
        setHabitsList(data);
    }, [data]);
  
    return { habitsList, setHabitsList };
}