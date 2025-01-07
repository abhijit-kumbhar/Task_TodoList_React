  import React, { useState } from 'react';
  import TodoForm from './components/TodoForm';
  import TodoList from './components/TodoList';
  import './styles.css';

  const App = () => {
    const [todos, setTodos] = useState([]);

    // Add a new todo
    const addTodo = (todo) => {
      setTodos((prevTodos) => [...prevTodos, todo].sort((a, b) => a.priority - b.priority));
    };

    // Update the status of a todo
    const updateStatus = (id, newStatus) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, status: newStatus } : todo))
      );
    };

    return (
      <div className="app">
        <h1>Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onUpdateStatus={updateStatus} />
      </div>
    );
  };

  export default App;
