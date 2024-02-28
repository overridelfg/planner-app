import { useTasks } from "@/components/TasksView/hooks/useTasks"
import { filterTasksByDate } from "@/components/TasksView/tasks.filter";

export const useTasksStatistic = () => {

    const { tasksList } = useTasks();
    
    const completedTasks = tasksList?.filter(task => task.isCompleted);
    const notCompletedTasks = tasksList?.filter(task => !task.isCompleted);
    const totalTasks = tasksList?.length || 0;
    const todayTasks = filterTasksByDate(tasksList, 'today');

    return {completedTasks, notCompletedTasks, totalTasks, todayTasks}
}