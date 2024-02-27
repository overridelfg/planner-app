import { useAuthSelector } from "@/hooks/useAuth";
import { useUpdateTask } from "./useUpdateTask";
import { DropResult } from "@hello-pangea/dnd";
import { FILTERS } from "../columns.data";

export function useTaskDnd(taskId: string) {
  const { updateTask } = useUpdateTask(taskId);

  const { user } = useAuthSelector();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const destinationRowId = result.destination.droppableId;

    if (destinationRowId === result.source.droppableId) return;

    if (destinationRowId === "completed") {
      updateTask({
        data: {
          isCompleted: true,
        },
      });
    }

    const newCreatedAt = FILTERS[destinationRowId].format();
    updateTask({
      data: {
        createdAt: newCreatedAt,
        isCompleted: false,
      },
    });
  };

  return { onDragEnd };
}
