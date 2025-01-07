import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdateStatus }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdateStatus={onUpdateStatus} />
      ))}
    </ul>
  );
};

export default TodoList;
