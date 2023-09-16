import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <div className="TodoInput">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your data"
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn" disabled={!value}>
          Add Now
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
