import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { v4 as uuidv4 } from "uuid";
import UpdateTodo from "./updateTodo";

const getLocalTodos = () => {
  let list = localStorage.getItem('lists');

  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return [];
  }
}

const Todo = () => {
  const [todos, setTodos] = useState(getLocalTodos());

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="Todo">
      <center><h1>Todo List App</h1></center>
      <TodoInput addTodo={addTodo} />
      {/* Display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <UpdateTodo editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <TodoList
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default Todo;
