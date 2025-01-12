import React, { useState } from 'react';

function ToDoApp() {
  const [tasks, setTasks] = useState([]); // Vazifalar ro'yxati
  const [task, setTask] = useState('');   // Yangi vazifa uchun input qiymati

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]); // Yangi vazifani ro'yxatga qo'shish
      setTask(''); // Inputni tozalash
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Vazifani o'chirish
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Pixel vazifalari</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Yangi vazifa qo'shing"
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '80%',
            marginBottom: '10px',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginLeft: '10px',
            border: '1px solid',
            borderRadius: '15px',
            cursor: 'pointer',

          }}
        >
          Qo'shish
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              transition: '1s',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              marginBottom: '5px',
              borderRadius: '5px',
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: '5px 10px',
                fontSize: '14px',
                color: '#fff',
                backgroundColor: 'red',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: '1s',
              }}
            >
              O'chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
