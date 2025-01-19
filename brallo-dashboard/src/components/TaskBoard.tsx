import React from 'react';
//import './../styles/TaskBoard.css';
import TaskList from './TaskList';

const TaskBoard: React.FC = () => {
    return (

        <div className="p-5 bg-pink-50 min-h-screen">
            <div className="w-3/5 m-auto">
                <div class="text-3xl text-gray-800 text-center mb-10">
                    <h1 className="font-semibold">My Task Dashboard</h1>
                </div>
                <div class="flex gap-5 justify-center">
                    <TaskList title="To Do" />
                    <TaskList title="In Progress" />
                    <TaskList title="Completed" />
                </div>
                <div className="mt-7">
                    <div className="bg-white rounded-lg h-36 text-left p-5 shadow-md">
                        <h1>Footer</h1>
                    </div>
                </div>
            </div>
        </div>

        // <div className="task-board">
        //     <h1 className="board-title">My Task Dashboard</h1>
        //     <div className="lists-container">
        //         <TaskList title="To Do" />
        //         <TaskList title="In Progress" />
        //         <TaskList title="Completed" />
        //     </div>
        // </div>
    );
};

export default TaskBoard;
