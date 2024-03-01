import { IHabitsResponse, UpdateOrderDTO } from "@/types/habits.type";
import { ITasksResponse } from "@/types/tasks.type";
import { DropResult } from "@hello-pangea/dnd"
import { Dispatch, SetStateAction } from "react";
import { useUpdateHabitsOrder } from "./useUpdateHabitsOrder";

export const useHibitsDnd = (setHabitsList: Dispatch<SetStateAction<IHabitsResponse[] | undefined>>, habitsList: IHabitsResponse[] | undefined) => {

    const { updateHabitsOrder } = useUpdateHabitsOrder()

    const onDragEnd = (result: DropResult) => {
        if(!result.destination) return;

        const destinationIndex = result.destination.index;
        const sourceIndex = result.source.index;

        if(destinationIndex === sourceIndex) return;

        const copyHabitsList = [...habitsList!];
        const draggableEl = copyHabitsList!.splice(sourceIndex, 1)[0];
        copyHabitsList!.splice(destinationIndex, 0, draggableEl);

        const ids = [];
        const tasksIds = [];
        for(let i = 0; i < copyHabitsList.length; i++ ) {
            ids.push(copyHabitsList[i].order);
            tasksIds.push(copyHabitsList[i]._id);
            copyHabitsList[i].order = i + 1;
        }

        setHabitsList(copyHabitsList);

        updateHabitsOrder({ids, tasksIds});
    }

    return { onDragEnd };

}