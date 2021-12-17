import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import List from '../List/List';
import EditModal from '../UI/EditModal';
import TodoForm from '../UI/TodoForm';
import { ListContext } from '../Contexts/ListContext';

import classes from './Main.module.css'

const Main = () => {

  const [taskForUpdating, setTaskForUpdating] = useState({})

  const ListCtx = useContext(ListContext)

  const handleOpenModal = (item) => {
    ListCtx.handleModal(true)

    setTaskForUpdating(item)
  }

  return (
    <div className={classes.wrapper}>

      <TodoForm />

      <List editModal={handleOpenModal} />

      {ListCtx.openModal && 
        ReactDOM.createPortal(
          <EditModal item={taskForUpdating} />,
          document.getElementById('editModal')
        )
      }

    </div>
  )
}

export default Main;