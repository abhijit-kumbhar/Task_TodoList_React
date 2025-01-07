import React from 'react';

const TodoItem = ({ todo, onUpdateStatus }) => {
  const handleStatusChange = (e) => {
    onUpdateStatus(todo.id, e.target.value);
  };

  return (
    <li className={`todo-item priority-${todo.priority}`}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Scheduled: {todo.scheduleDate}</p>
      <p>
        Status: 
        <select value={todo.status} onChange={handleStatusChange}>
          <option value="Todo">Todo</option>
          <option value="Pending">Pending</option>
          <option value="Reschedule">Reschedule</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
    </li>
  );
};

export default TodoItem;
