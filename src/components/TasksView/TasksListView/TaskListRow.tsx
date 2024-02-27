"use client"
import { ITasksResponse, TypeTaskFormState } from "@/types/tasks.type";
import Checkbox from "@/ui/Checkbox";
import { InputField } from "@/ui/InputField";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "../DatePicker/DatePicker";
import SingleSelect from "./SingleSelect";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { GripVertical, Loader, Trash } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useTaskDebounce } from "../hooks/useTaskDebounce";

interface TaskListRowProps {
  item: ITasksResponse;
  setItems: Dispatch<SetStateAction<ITasksResponse[] | undefined>>;
}

const TaskListRow: React.FC<TaskListRowProps> = ({ item, setItems }) => {
  const { deleteTask, isLoading } = useDeleteTask(item._id);

  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<TypeTaskFormState>({
    defaultValues: {
      name: item.name,
      createdAt: item.createdAt,
      priority: item.priority,
      isCompleted: item.isCompleted,
    },
  });

  useTaskDebounce({ watch: watch, itemId: item._id });

  return (
    <div className="flex justify-between items-center w-full gap-6 border-b">
        <div>
            <GripVertical/>
        </div>
      <Controller
        control={control}
        name="isCompleted"
        render={({ field: { value, onChange } }) => (
          <Checkbox onChange={onChange} checked={value} />
        )}
      />
      <InputField
        className="text-bg bg-black"
        type="text"
        id="taks1"
        placeholder="Add task..."
        {...register("name")}
      />
      <Controller
        control={control}
        name="createdAt"
        render={({ field: { value, onChange } }) => (
          <DatePicker value={value || ""} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="priority"
        render={({ field: { value, onChange } }) => (
          <SingleSelect
            data={["low", "medium", "high"].map((value) => ({
              value: value,
              label: value,
            }))}
            onChange={onChange}
            value={value || ""}
          />
        )}
      />
      <button
        onClick={() => {
          item._id
            ? deleteTask(item._id)
            : setItems((prev) => prev?.slice(0, -1));
        }}
      >
        {isLoading ? <Loader size={15} /> : <Trash size={15} />}
      </button>
    </div>
  );
};

export default TaskListRow;
