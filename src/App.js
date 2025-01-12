import React, { useState } from 'react';

function ToDoApp() {
  const [tasks, setTasks] = useState([]); // Vazifalar ro'yxati
  const [task, setTask] = useState('');   // Yangi vazifa uchun input qiymati
  const [deadline, setDeadline] = useState(''); // Vazifa tugash vaqti uchun input qiymati

  const addTask = () => {
    if (task.trim() && deadline.trim()) {
      const currentTime = new Date(); // Hozirgi vaqtni olish
      const timeString = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }); // Soat va minutni formatlash
      setTasks([...tasks, { text: task, timeAdded: timeString, deadline }]); // Vazifani vaqtlar bilan birga qo'shish
      setTask(''); // Inputni tozalash
      setDeadline(''); // Tugash vaqtini tozalash
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Vazifani o'chirish
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>To-Do List</h1>
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
        <input
          type="time"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            marginLeft: '10px',
            marginBottom: '10px',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginLeft: '10px',
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
            <span>
              <strong>{task.text}</strong> <br />
              <small style={{ color: '#555' }}>Qo'shildi: {task.timeAdded}</small> <br />
              <small style={{ color: '#555' }}>Tayyor bo'lishi kerak: {task.deadline}</small>
            </span>
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
