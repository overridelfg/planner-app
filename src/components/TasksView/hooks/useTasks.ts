import { useAuthSelector } from "@/hooks/useAuth";
import TasksService from "@/services/tasks.service";
import { ITasksResponse } from "@/types/tasks.type";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export function useTasks() {
    
    const { user } = useAuthSelector();
    const [tasksList, setTasksList] = useState<ITasksResponse[] | undefined>();

    const { data } = useQuery({
        queryKey: ["tasks"],
        queryFn: () => TasksService.getTasks(user!._id)
    })

    useEffect(() => {
        setTasksList(data)
    }, [data]);

    return {tasksList, setTasksList}

}