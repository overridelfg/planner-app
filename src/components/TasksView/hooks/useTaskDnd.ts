import { useAuthSelector } from "@/hooks/useAuth";
import { useUpdateTask } from "./useUpdateTask";
import { DropResult } from "@hello-pangea/dnd";
import { FILTERS } from "../columns.data";

export function useTaskDnd() {

  const { updateTask } = useUpdateTask();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const destinationRowId = result.destination.droppableId;

    if (destinationRowId === result.source.droppableId) return;



    if (destinationRowId === "completed") {
      updateTask({
        data: {
          isCompleted: true,
        },
        taskId: result.draggableId
      });
    }

    const newCreatedAt = FILTERS[destinationRowId].format();


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
