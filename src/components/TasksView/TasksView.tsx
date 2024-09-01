"use client";

import { useState } from "react";
import SwitcherTasks from "./SwitcherTasks/SwitcherTasks";
import TaskListView from "./TasksListView/TasksListView";
import TasksKanbanView from "./TasksKanbanView/TasksKanbanView";

interface TasksViewProps {
    
}
 
const TasksView: React.FC<TasksViewProps> = () => {
    const [tasksViewType, setTasksViewType] = useState<'list' | 'board'>('list');

    return (
      <div className="h-full min-h-full">
        <SwitcherTasks setTasksViewType={setTasksViewType} taskViewType={tasksViewType}/>
        {tasksViewType === 'list' ? 
          <TaskListView key={'1'}/>
        : <TasksKanbanView key={'2'}/>}
      </div>
    );
}
 
export default TasksView;