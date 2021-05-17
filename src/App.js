import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import TodoContainer from './components/toDo/TodoContainer';
import ToDoneContainer from './components/toDone/ToDoneContainer';
import Footer from './components/footer'
import Retino from './images/RETINO.png'
function App() {
  const [todoList, setTodoList] = useState({
    myList:JSON.parse(localStorage.getItem("todo")) || []
  });

  useEffect(() => {
   localStorage.setItem('todo',JSON.stringify(todoList.myList))
  }, [todoList.myList])

  const updateItem = myId => {
    let newList = todoList.myList.map(event => {
      if(event.id === myId){
        event.done = ! event.done
        return event;
      }else return event;
    })
    setTodoList(
      {
        myList:newList
      }
    )
  }

  const addItem = (task, description) => {
    console.log(task)
    if(task !== '' || description !== ''){
      const newItem = {
        id:todoList.myList.length +1,
        task:task,
        description:description,
        done:true
      }
      console.log(newItem)
      setTodoList({
        myList:[...todoList.myList, newItem]
      })
    }
  }

  const removeItem = item =>{
    
   
    let newArr = [...todoList.myList];
    console.log(item)
    let index = todoList.myList.indexOf(item)
    newArr.splice(index,1)
    setTodoList({
      myList:newArr
    })   
  }


  const toDo = todoList.myList.filter(e1 => e1.done)
  const toDone = todoList.myList.filter(e2 => ! e2.done)
  return (
    <div className="App container">
      <Form handleAddTodo = {addItem}/>
      <div className="todos">
        <TodoContainer arrToDo = {toDo} handleChange = {updateItem} removeItem = {removeItem}/>
        <ToDoneContainer arrToDone = {toDone} handleChange = {updateItem} removeItem = {removeItem}/>

      </div>
 
      <Footer/>
      
    </div>
  );
}

export default App;
