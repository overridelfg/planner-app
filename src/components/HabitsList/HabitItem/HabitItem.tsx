"use client"
import { IHabitsResponse } from "@/types/habits.type";
import { GripVertical } from "lucide-react";

interface HabitItemProps {
    habit: IHabitsResponse
}
 
const HabitItem: React.FC<HabitItemProps> = ({habit}) => {
    return (<div className="rounded-sm flex p-4 gap-3" style={{backgroundColor: habit.color}}>
        <div>
            <GripVertical/>
        </div>
        <div>{habit.name}</div>
    </div>);
}
 
export default HabitItem;