"use client"

import { ITasksResponse } from "@/types/tasks.type";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

interface AddTaskKanbanButtonProps {
  filterDate: string | undefined;
  setItems: Dispatch<SetStateAction<ITasksResponse[] | undefined>>
}

const AddTaskKanbanButton: React.FC<AddTaskKanbanButtonProps> = ({setItems, filterDate}) => {

  const addRowHandler = () => {
      setItems((prev) => {
        
        if(!prev) return;
        console.log(prev)
        return [
          ...prev,
          {
            _id: '',
            name: '',
            isCompleted: false,
            createdAt: filterDate ? filterDate : '',
            userId: ''
          }
        ]
      })
  }

  return (
    <div className="w-full bg-transparent p-3 border-b border-b-gre">
      <button 
      className="italic opacity-40 text-sm"
      onClick={addRowHandler}>Add task...</button>
    </div>
  );
};

export default AddTaskKanbanButton;
