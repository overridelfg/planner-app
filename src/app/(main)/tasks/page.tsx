"use client"

import SwitcherTasks from "@/components/TasksView/SwitcherTasks/SwitcherTasks";
import TasksKanbanView from "@/components/TasksView/TasksKanbanView/TasksKanbanView";
import TaskListView from "@/components/TasksView/TasksListView/TasksListView";
import TaskView from "@/components/TasksView/TasksListView/TasksListView";
import { useState } from "react";

interface TasksPageProps {}

const TasksPage: React.FC<TasksPageProps> = () => {

  const [tasksViewType, setTasksViewType] = useState<'list' | 'board'>('list');

  return (
    <div>
      <SwitcherTasks setTasksViewType={setTasksViewType} taskViewType={tasksViewType}/>
      {tasksViewType === 'list' ? 
        <TaskListView key={'1'}/>
      : <TasksKanbanView key={'2'}/>}
    </div>
  );
};

export default TasksPage;
