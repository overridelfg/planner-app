import TasksListView from "@/components/TasksView/TasksListView/TasksListView";

interface TasksPageProps {}

const TasksPage: React.FC<TasksPageProps> = () => {
  return (
    <div>
      Tasks
      <TasksListView />
    </div>
  );
};

export default TasksPage;
