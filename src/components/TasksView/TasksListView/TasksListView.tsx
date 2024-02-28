"use client"
import { DragDropContext } from "@hello-pangea/dnd";
import { useTaskDnd } from "../hooks/useTaskDnd";
import { useTasks } from "../hooks/useTasks";
import TasksListColumn from "./TasksListColumn";
import { COLUMNS, FILTERS } from "../columns.data";

interface TasksListViewProps {
    
}
 
const TaskListView: React.FC<TasksListViewProps> = () => {

    const {tasksList, setTasksList} = useTasks();
    const { onDragEnd } = useTaskDnd()

    return (
        <DragDropContext onDragEnd={onDragEnd} key={'list'}>
            {COLUMNS.map((filter, index) => (
                <TasksListColumn
                tasksList={tasksList}
                setTasksList={setTasksList}
                value={filter.value}
                label={filter.label}/>
            ))}
        </DragDropContext>
    );
}
 
export default TaskListView;