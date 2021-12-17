import React from 'react'
import { Fragment, useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { ListContext } from '../Contexts/ListContext';
import classes from './EditModal.module.css'

const EditModal = (props) => {

  const [updatedTask, setUpdatedTask] = useState(props.item.content)

  const ListCtx = useContext(ListContext)

  const inputChangeHandler = (e) => {
    setUpdatedTask(e.target.value)
  }

  const updateTask = () => {
    ListCtx.updateTask({content: updatedTask, id: props.item.id})
    ListCtx.handleModal(false)
  }

  const closeModal = () => {
    ListCtx.handleModal(false)
  }

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={closeModal}></div>
      <div className={classes.inside}>
        <input type="text" placeholder='Update Your Task' value={updatedTask} onChange={inputChangeHandler} />
        <button className={classes.update} onClick={updateTask}>Update</button>
        <div className={classes.closeWrapper}>
          <button className={classes.close} onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </Fragment>
  )
}

export default EditModal