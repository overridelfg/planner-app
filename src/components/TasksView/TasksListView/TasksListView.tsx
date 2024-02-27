"use client";

import Checkbox from "@/ui/Checkbox";
import { useTasks } from "../hooks/useTasks";
import AddTaskButton from "./AddTaskButton";
import DatePicker from "../DatePicker/DatePicker";
import { useEffect, useState } from "react";
import { InputField } from "@/ui/InputField";
import SingleSelect, { IOption } from "./SingleSelect";
import TaskListRow from "./TaskListRow";

interface TasksListViewProps {}

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

const TasksListView: React.FC<TasksListViewProps> = () => {
  const { tasksList, setTasksList } = useTasks();


  return (
    <div>
      {tasksList && tasksList.map((task) => (
        <TaskListRow
        key={task._id}
        item={task}
        setItems={setTasksList}
        />
      ))}
    </div>
  );
};

export default TasksListView;
