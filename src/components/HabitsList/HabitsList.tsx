"use client"

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import HabitItem from "./HabitItem/HabitItem";
import { useHabits } from "./hooks/useHabits";
import { useHibitsDnd } from "./hooks/useHabitsDnd";
import HabitsForm from "./HabitsForm/HabitsForm";
import { useState } from "react";

interface HabitsListProps {
    
}
 
const HabitsList: React.FC<HabitsListProps> = () => {

    const {habitsList, setHabitsList} = useHabits();
    const { onDragEnd } = useHibitsDnd(setHabitsList, habitsList)

    return (
        <div className="flex gap-3 max-w-screen-xl">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-col gap-4 w-full">
                    <Droppable droppableId="habitsList">
                        {provided => (
                            <div
                            className="flex flex-col gap-4"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                                {habitsList?.map((habit, index) => (
                                    <Draggable draggableId={habit._id} index={index} key={habit._id}>
                                        {provided => (
                                            <div
                                            ref = {provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                                <HabitItem habit = {habit}/>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
            <HabitsForm habitsList = {habitsList}/>
        </div>
      

    );
}
 
export default HabitsList;