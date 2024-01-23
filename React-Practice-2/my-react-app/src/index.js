import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const updateTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  // Sorting the task from z-a
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((b, a) => a.text.localeCompare(b.text));
    setTasks(sortedTasks);
  };

  return (
    <div className="task-tracker">
      <h1>Task Tracker</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ fontSize: '20px', padding: '10px' }}
      />
      <button onClick={addTask} style={{ fontSize: '20px', padding: '10px' }}>Add Task</button>
      <button onClick={sortTasks} style={{ fontSize: '20px', padding: '10px' }}>Sort Tasks</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(index)} style={{ fontSize: '16px', padding: '8px' }}>Remove</button>
            <button onClick={() => toggleCompletion(index)} style={{ fontSize: '16px', padding: '8px' }}>
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <input
              type="text"
              value={task.text}
              onChange={(e) => updateTask(index, e.target.value)}
              style={{ fontSize: '16px', padding: '8px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <TaskTracker />
  </React.StrictMode>,
  document.getElementById('root')
);
