import React from 'react';
import TaskCard from './TaskCard';

interface TaskListProps {
    title: string;
}

const TaskList: React.FC<TaskListProps> = ({ title }) => {
    return (

        <div class="bg-white rounded-lg p-4 shadow-md w-72">
            <div class="text-xl mb-2.5 text-gray-700">
                <h2>{title}</h2>
            </div>
            <TaskCard title="Sample Task 1" description="This is a sample task" />
            <TaskCard title="Sample Task 2" description="Another task to handle" />
        </div>

    );
};

export default TaskList;
