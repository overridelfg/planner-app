"use client";

import { useTasksStatistic } from "@/hooks/useTasksStatistic";
import CardStatistic from "../CardStatistic/CardStatistic";

interface StatisticListProps {}

const StatisticList: React.FC<StatisticListProps> = () => {
  const { completedTasks, notCompletedTasks, totalTasks, todayTasks } =
    useTasksStatistic();

  return (
    <div className="flex gap-4">
      <CardStatistic label="Total" value={totalTasks} />
      <CardStatistic
        label="Completed Tasks"
        value={completedTasks?.length || 0}
      />
      <CardStatistic
        label="Uncompleted Tasks"
        value={notCompletedTasks?.length || 0}
      />
      <CardStatistic label="Today Tasks" value={todayTasks?.length || 0} />
    </div>
  );
};

export default StatisticList;
