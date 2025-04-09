import { useState } from 'react';

function App() {
  const [task, setTask ] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('')
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>📝 To-Do List</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{
          padding: '10px',
          width: '70%',
          marginRight: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          padding: '10px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#22c55e',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: '10px',
              background: '#d9d9d9d9',
              padding: '10px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {item}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{
                background: '#ef4444',
                border: 'none',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p style={{color: '#b7b7b7'}}>Made in React + Vite!</p>
    </div>
  );
}

export default App;
