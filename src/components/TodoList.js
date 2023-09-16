import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const [color, setColor] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setColor(false);
  }, []);

  useEffect(() => {
    if (color) {
      setBackgroundColor(getRandomColor());
    }
  }, [color]);

  const taskStyle = {
    backgroundColor,
  };

  useEffect(() => {
    const savedCheckboxState = localStorage.getItem(`isChecked-${task.id}`);
    if (savedCheckboxState !== null) {
      setIsChecked(savedCheckboxState === 'true');
    }
  }, [task.id]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
    localStorage.setItem(`isChecked-${task.id}`, !isChecked);
  };

  return (
    <div className="TodoList" style={taskStyle}>
      <input type='checkbox'
        className="fa-square-check"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onClick={() => toggleComplete(task.id)}
      />
      <p className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
