import { useCallback, useEffect } from "react";
import { useCreateTask } from "./useCreateTask";
import { useUpdateTask } from "./useUpdateTask";
import { TypeTaskFormState } from "@/types/tasks.type";
import debounce from "lodash/debounce";
import { UseFormWatch } from "react-hook-form";

interface IUseTaskDebounce {
  watch: UseFormWatch<TypeTaskFormState>;
  itemId: string;
}

export function useTaskDebounce(
  { watch, itemId }: IUseTaskDebounce,
) {
  const { updateTask } = useUpdateTask();
  const { createTask } = useCreateTask();

  const debounceCreateTask = useCallback(
    debounce((fromData: TypeTaskFormState) => {
      createTask({ data: fromData });
    }, 500),
    [],
  );

  const debounceUpdateTask = useCallback(
    debounce((fromData: TypeTaskFormState) => {
      updateTask({ data: fromData, taskId: itemId});
    }, 500),
    [],
  );

  useEffect(() => {
    const { unsubscribe } = watch((formData) => {
      if (itemId) {
        debounceUpdateTask({
          ...formData,
          priority: formData.priority || undefined,
        });
      } else {
        if(formData.name) {
          debounceCreateTask(formData);
        }
      }
    });

    return () => unsubscribe();
  }, [watch(), debounceCreateTask, debounceUpdateTask]);
}
