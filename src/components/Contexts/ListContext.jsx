import { useState, createContext } from "react";

export const ListContext = createContext(null)

const ListContextProvider = (props) => {

  const [tasks, setTasks] = useState([])

  const [openModal, setOpenModal] = useState(false)

  const addNewTask = (newTask) => {
    setTasks(prev => [newTask, ...prev])
  }

  const deleteTask = (id) => {
    var oldTasks = tasks;
    var newTasks = oldTasks.filter(task => task.id  !== id)
    setTasks(newTasks)
  }

  const updateTask = (task) => {
    var allTasks = tasks
    var index = allTasks.findIndex(item => item.id === task.id);
    var newItem = {
      ...task,
      isCompleted: false
    }
    allTasks.splice(index, 1, newItem)

    setTasks(allTasks)
  }

  const handleModal = (val) => {
    setOpenModal(val)
  }

  return (
    <ListContext.Provider value={{tasks, openModal, addNewTask, deleteTask, updateTask, handleModal}}>
      {props.children}
    </ListContext.Provider>
  )
}

export default ListContextProvider;