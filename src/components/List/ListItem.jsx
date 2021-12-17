import { ListContext } from '../Contexts/ListContext'
import './ListItem.css'
import { useContext } from 'react';

const ListItem = (props) => {

  const ListCtx = useContext(ListContext)

  const item = props.task

  const deleteTask = (id) => {
    ListCtx.deleteTask(id)
  }

  const openEditModal = (item) => {
    props.onHandleOpenModal(item)
  }
  
  return (
    <div className="item">
      <p>{item.content}</p>
      <div className="icons">
        <i className="far fa-edit" onClick={() => openEditModal({content: item.content, id: item.id})}></i>
        <i className="fas fa-trash-alt" onClick={() => deleteTask(item.id)}></i>
      </div>
    </div>
  )
}

export default ListItem;