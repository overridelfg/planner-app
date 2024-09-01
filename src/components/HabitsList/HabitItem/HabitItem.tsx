"use client";
import { IHabitsResponse } from "@/types/habits.type";
import { Edit, GripVertical, Trash } from "lucide-react";
import { useDeleteHabit } from "../hooks/useDeleteHabits";
import { useUpdateHabits } from "../hooks/useUpdateHabits";

interface HabitItemProps {
  habit: IHabitsResponse;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit }) => {
  const { deleteHabit } = useDeleteHabit(habit._id);
  const { updateHabit } = useUpdateHabits();

  return (
    <div
      className="rounded-sm flex p-4 gap-3 justify-between"
      style={{ backgroundColor: habit.color }}
    >
      <div>
        <GripVertical />
      </div>
      <div className="flex gap-1 flex-grow">
        <div>{habit.name}</div>
        <div>{"(" + habit.duration + "min)"}</div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => {
            deleteHabit();
          }}
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
