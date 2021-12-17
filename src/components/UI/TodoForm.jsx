import { useState, useContext } from 'react';
import classes from './TodoForm.module.css';
import { ListContext } from '../Contexts/ListContext';

const TodoForm = () => {

  const [inputText, setinputText] = useState('')

  const ListCtx = useContext(ListContext)

  const taskInputHandler = (e) => {
    setinputText(e.target.value)
  }

  const addNewItemHandler = (e) => {
    e.preventDefault()
    if(inputText) {
      const item = {
        id: Math.floor(Math.random() * 1000000000),
        content: inputText,
        isCompleted: false
      }
      ListCtx.addNewTask(item) 
      setinputText('')
    }
  }

  return (
    <form onSubmit={addNewItemHandler} className={classes.form}>
      <input value={inputText} type="text" placeholder='Type you task' onChange={taskInputHandler} />
      <button>Add Task</button>
    </form>
  )
}

export default TodoForm;