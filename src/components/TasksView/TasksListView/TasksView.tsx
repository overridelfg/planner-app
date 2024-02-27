"use client"
import { DragDropContext } from "@hello-pangea/dnd";
import { useTaskDnd } from "../hooks/useTaskDnd";
import { useTasks } from "../hooks/useTasks";
import TasksListView from "./TasksListView";

interface TasksViewProps {
    
}
 
const TaskView: React.FC<TasksViewProps> = () => {

    const {tasksList, setTasksList} = useTasks();
    const { onDragEnd } = useTaskDnd()

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <TasksListView
                tasksList={tasksList}
                setTasksList={setTasksList}
                value="today"
                label="Today"
                index={0}/>
            <TasksListView
                tasksList={tasksList}
                setTasksList={setTasksList}
                value="tomorrow"
                label="Tomorrow"
                index={1}/>
             <TasksListView
                tasksList={tasksList}
                setTasksList={setTasksList}
                value="on-this-week"
                label="On this week"
                index={2}/>
            <TasksListView
                tasksList={tasksList}
                setTasksList={setTasksList}
                value="on-next-week"
                label="On next week"
                index={3}/>
        </DragDropContext>
    );
}
 
export default TaskView;