import React from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';

const App: React.FC = () => {
    return (
        <div className="App">
            <TaskBoard />
        </div>
    );
};

export default App;
