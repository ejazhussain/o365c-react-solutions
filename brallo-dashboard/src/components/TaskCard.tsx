import React from 'react';
import '../styles/TaskCard.css';

interface TaskCardProps {
    title: string;
    description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
    return (
        <div className="bg-blue-50 border rounded-sm p-2 mb-2">
            <h3 className="text-base text-blue-600">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};

export default TaskCard;
