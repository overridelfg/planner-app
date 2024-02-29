import { useAuthSelector } from "@/hooks/useAuth";
import { useUpdateTask } from "./useUpdateTask";
import { DropResult } from "@hello-pangea/dnd";
import { FILTERS } from "../columns.data";
import { Dispatch, SetStateAction } from "react";
import { ITasksResponse } from "@/types/tasks.type";

export function useTaskDnd() {

  const { updateTask } = useUpdateTask();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const destinatiColumnId = result.destination.droppableId;

    if (destinatiColumnId === result.source.droppableId) return;



    if (destinatiColumnId === "completed") {

      updateTask({
        data: {
          isCompleted: true,
        },
        taskId: result.draggableId
      });
    }

    const newCreatedAt = FILTERS[destinatiColumnId].format();

    updateTask({
      data: {
        createdAt: newCreatedAt,
        isCompleted: false,
      },
      taskId: result.draggableId
    });

  };

  return { onDragEnd };
}
