"use client"

import Checkbox from "@/ui/Checkbox";
import { useTasks } from "../hooks/useTasks";
import AddTaskButton from "./AddTaskButton";


interface TasksListViewProps {}

const TasksListView: React.FC<TasksListViewProps> = () => {

    const {tasksList} = useTasks();

    console.log(tasksList);
    
  return (
    <div>
        <Checkbox/>
      {/* <InputField
        className="text-bg bg-black"
        type="text"
        id="taks1"
        placeholder="Add task..."
      /> */}
      <AddTaskButton/>
    </div>
  );
};

export default TasksListView;
