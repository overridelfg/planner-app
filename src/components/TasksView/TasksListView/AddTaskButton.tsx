"use client"

import { ITasksResponse } from "@/types/tasks.type";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

interface AddTaskButtonProps {
  filterDate: string | undefined;
  setItems: Dispatch<SetStateAction<ITasksResponse[] | undefined>>
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({setItems, filterDate}) => {

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
    <div className="w-full bg-transparent p-3 border-b border-b-grey">
      <button 
      className="italic opacity-40 text-sm"
      onClick={addRowHandler}>Add task...</button>
    </div>
  );
};

export default AddTaskButton;
