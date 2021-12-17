import { useState, useContext } from 'react';
import classes from './List.module.css'
import ListItem from './ListItem';
import {ListContext} from '../Contexts/ListContext';

const List = (props) => {

  const listCtx = useContext(ListContext)

  return (
    <div className={classes.list}>
      {listCtx.tasks.length > 0 ? listCtx.tasks.map(task => (
        <ListItem onHandleOpenModal={props.editModal} key={task.id} task={task} />
      )) : <p>You Have No Tasks Yet!</p>}
    </div>
  )
}

export default List;