import TasksView from "@/components/TasksView/TasksView";
import { Metadata } from "next";

interface TasksPageProps {}

export const metadata: Metadata = {
  title: "Tasks List",
  description: `Tasks List"`,
};

const TasksPage: React.FC<TasksPageProps> = () => {

  return (
    <TasksView/>
  );
};

export default TasksPage;
