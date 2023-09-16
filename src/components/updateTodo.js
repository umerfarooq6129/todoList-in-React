import React, {useState} from 'react'

const UpdateTodo = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {

      e.preventDefault();

      editTodo(value, task.id);
      };

  return (

    <form onSubmit={handleSubmit} className="TodoInput">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} 
      className="todo-input" placeholder='Update task' />
      <button type="submit" className='todo-btn'>Update Now</button>
    </form>
  )
}

export default UpdateTodo