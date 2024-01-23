import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');

  // Adds an array with the content given in input
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Removes an arrow
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Confirms the "add tasks" button and adds content into the array
  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Edits tasks
  const startEditTask = (index, text) => {
    setEditTaskIndex(index);
    setEditTaskText(text);
  };

  // Nulls during editing tasks
  const cancelEditTask = () => {
    setEditTaskIndex(null);
    setEditTaskText('');
  };

  // Change contents in tasks (array)
  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editTaskText;
    setTasks(updatedTasks);
    setEditTaskIndex(null);
    setEditTaskText('');
  };

  // Sort tasks in alphabetical order
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
    setTasks(sortedTasks);
  };

  return (
<div className="center-container">
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
            {editTaskIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                  style={{ fontSize: '16px', padding: '8px' }}
                />
                <button onClick={() => saveEditedTask(index)}>Save</button>
                <button onClick={cancelEditTask}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                  {task.text}
                </span>
                <button onClick={() => removeTask(index)} style={{ fontSize: '16px', padding: '8px' }}>Remove</button>
                <button onClick={() => toggleCompletion(index)} style={{ fontSize: '16px', padding: '8px' }}>
                  {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                </button>
                <button onClick={() => startEditTask(index, task.text)} style={{ fontSize: '16px', padding: '8px' }}>Update Task</button>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <TaskTracker />
  </React.StrictMode>,
  document.getElementById('root')
);
