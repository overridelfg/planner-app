"use client"
import { DragDropContext } from "@hello-pangea/dnd";
import { useTaskDnd } from "../hooks/useTaskDnd";
import { useTasks } from "../hooks/useTasks";
import { COLUMNS, FILTERS } from "../columns.data";
import TasksKabanColumn from "./TasksKanbanColumn";

interface TasksKanbanViewProps {
    
}
 
const TasksKanbanView: React.FC<TasksKanbanViewProps> = () => {

    const {tasksList, setTasksList} = useTasks();
    const { onDragEnd } = useTaskDnd()

    return (
        <DragDropContext onDragEnd={onDragEnd} key={'board'}>
            <div className="flex gap-5 overflow-auto">
                {COLUMNS.map((filter, index) => (
                    <TasksKabanColumn
                    tasksList={tasksList}
                    setTasksList={setTasksList}
                    value={filter.value}
                    label={filter.label}/>
                ))}
            </div>
      
        </DragDropContext>
    );
}
 
export default TasksKanbanView;