import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [priority, setPriority] = useState('1'); // 1: High, 2: Medium, 3: Low
  const [status, setStatus] = useState('Todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      description,
      scheduleDate,
      priority: parseInt(priority),
      status,
    };

    onAddTodo(newTodo);

    setTitle('');
    setDescription('');
    setScheduleDate('');
    setPriority('1');
    setStatus('Todo');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={scheduleDate}
        onChange={(e) => setScheduleDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="Pending">Pending</option>
        <option value="Reschedule">Reschedule</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
