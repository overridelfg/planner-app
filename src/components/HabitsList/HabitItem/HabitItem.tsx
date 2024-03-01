"use client"
import { IHabitsResponse } from "@/types/habits.type";
import { GripVertical, Trash } from "lucide-react";
import { useDeleteHabit } from "../hooks/useDeleteHabits";

interface HabitItemProps {
    habit: IHabitsResponse
}
 
const HabitItem: React.FC<HabitItemProps> = ({habit}) => {

    const { deleteHabit } = useDeleteHabit(habit._id);

    return (<div className="rounded-sm flex p-4 gap-3 justify-between" style={{backgroundColor: habit.color}}>
        <div>
            <GripVertical/>
        </div>
        <div className="flex gap-1 flex-grow">
            <div>{habit.name}</div>
            <div>{"(" + habit.duration + "min)"}</div>
        </div>
        <button
        onClick={() => {
            deleteHabit();
        }}>
            <Trash/>
        </button>
    </div>);
}
 
export default HabitItem;