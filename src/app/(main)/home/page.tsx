"use client"

import CardStatistic from "@/components/CardStatistic/CardStatistic";
import SidebarMenu from "@/components/Dashboard/SidebarMenu/SidebarMenu";
import { useTasks } from "@/components/TasksView/hooks/useTasks";
import { useTasksStatistic } from "@/hooks/useTasksStatistic";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  const {completedTasks, notCompletedTasks, totalTasks, todayTasks} = useTasksStatistic();

  return <div className="flex gap-4">
     <CardStatistic
      label="Total"
      value={totalTasks}
      />
      <CardStatistic
      label="Completed Tasks"
      value={completedTasks?.length || 0}
      />
       <CardStatistic
      label="Uncompleted Tasks"
      value={notCompletedTasks?.length || 0}
      />
        <CardStatistic
      label="Today Tasks"
      value={todayTasks?.length || 0}
      />
  </div>;
};

export default Home;
