import { useState } from 'preact/hooks';

import { h } from 'preact'
import './App.css';

import AddToDo from '../src/components/AddToDo/AddToDo';
import Card from './components/Card/Card';






const App = () => {

  const [ToDoList, setNewToDo] = useState([])
  const [deletedToDo, setDeletedToDo] = useState([])

  const getValueHandler = (value) => {
    setNewToDo((prevUsersList) => {
      return [
        ...prevUsersList,
        { val: value, position: 'one', id: Math.random().toString() },
      ];
    });
  };
  console.log(deletedToDo);
  const deleteHandler = (id) => {
    const delItem = ToDoList.find((num) => num.id === id);
    setDeletedToDo((prevList) => {
      return [...prevList, delItem]
    })

    const newToDoList = ToDoList.filter((item) => {

      return item.id !== id;
    });
    setNewToDo(() => newToDoList);
  }

  const forBackHandler = (id, btnType) => {

    const updatedToDo = ToDoList.map((item) => {
      if (item.id === id) {

        if (btnType === "backwards") {
          const updatedPosition = item.position === "three" ? (item.position = "two") : (item.position = "one");
          return { ...item, status: updatedPosition };
        } else {
          const updatedPosition = item.position === "one" ? (item.position = "two") : (item.position = "three");
          return { ...item, position: updatedPosition };
        }
      } else return item;
    });

    setNewToDo(() => updatedToDo);
  }





  return (

  
  
      
      
      
      <div   className="App">
        <AddToDo onGetValue={getValueHandler} />
        <div className="cardContainer" >
          <Card title="To Do" position="one" items={ToDoList} delete={deleteHandler} move={forBackHandler} />
          <Card title="In progress" position="two" items={ToDoList} delete={deleteHandler} move={forBackHandler} />
          <Card title="Completed" position="three" items={ToDoList} delete={deleteHandler} move={forBackHandler} />
        </div>
      </div>
     

    


  )
    ;


}

export default App;