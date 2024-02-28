"use client"
import { Dispatch, SetStateAction, useState } from "react";

interface SwitcherTasksProps {
    taskViewType: 'list' | 'board'
    setTasksViewType: Dispatch<SetStateAction<'list' | 'board'>>
}
 
const SwitcherTasks: React.FC<SwitcherTasksProps> = ({setTasksViewType, taskViewType}) => {

    return (<div className="flex gap-3">
        <div
        className={`cursor-pointer font-medium text-lg ${taskViewType === 'list' ? 'text-primary' : 'text-white'}`}
        onClick={() => setTasksViewType('list')}>
            List
        </div>
        <div
        className={`cursor-pointer font-medium text-lg ${taskViewType === 'board' ? 'text-primary' : 'text-white'}`}
        onClick={() => setTasksViewType('board')}>
            Board
        </div>
    </div>);
}
 
export default SwitcherTasks;