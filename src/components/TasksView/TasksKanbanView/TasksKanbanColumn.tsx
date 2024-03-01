"use client";

import Checkbox from "@/ui/Checkbox";
import { useTasks } from "../hooks/useTasks";
import DatePicker from "../DatePicker/DatePicker";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InputField } from "@/ui/InputField";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { filterTasksByDate } from "../tasks.filter";
import { ITasksResponse } from "@/types/tasks.type";
import { FILTERS } from "../columns.data";
import { IOption } from "../../SingleSelect/SingleSelect";
import AddTaskKanbanButton from "./AddTaskKanbanButton";
import TaskKanbanRow from "./TaskKanbanRow";

interface TasksKabanColumnProps {
  value: string;
  label: string;
  tasksList: ITasksResponse[] | undefined;
  setTasksList: Dispatch<SetStateAction<ITasksResponse[] | undefined>>
}

const data: IOption[] = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },

];

const TasksKabanColumn: React.FC<TasksKabanColumnProps> = ({value, label, tasksList, setTasksList }) => {

  return (
    <Droppable droppableId={value}>
      {provided => (
        <div
        ref={provided.innerRef}
        {...provided.droppableProps}>
          <div className="py-3">
            <div className="w-[300px] font-bold text-xl mb-4">{label}</div>
            {filterTasksByDate(tasksList, value)?.map((item, index) => {
                return <Draggable
                draggableId={item._id}
                key={item._id}
                index={index}>
                  {provided => (
                    <div
                    className="bg-sidebar"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                      <TaskKanbanRow key={item._id} item={item} setItems={setTasksList} />
                    </div>
                  )}
                </Draggable>
          })}
          </div>
          {provided.placeholder}
          {tasksList &&
            (value !== 'completed' && !tasksList?.some((task) => !task._id) && (
              <AddTaskKanbanButton setItems={setTasksList} filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}/>
            ))}
        </div>
      )}
      </Droppable>
  );
};

export default TasksKabanColumn;
