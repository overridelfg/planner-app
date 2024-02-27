
import MainTaskListView from "@/components/TasksView/TasksListView/MainTaskListView";
import TasksListView from "@/components/TasksView/TasksListView/TasksListView";
import TaskView from "@/components/TasksView/TasksListView/TasksView";

interface TasksPageProps {}

const TasksPage: React.FC<TasksPageProps> = () => {
  return (
    <div>
      Tasks
      <MainTaskListView />
    </div>
  );
};

export default TasksPage;
