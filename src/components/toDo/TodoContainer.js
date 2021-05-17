import React,{useState,useEffect} from 'react';
import ToDo from './todo'

const TodoContainer = ({arrToDo, handleChange, removeItem}) => {
  const [isVisible,setVisible] = useState(true);
    useEffect(()=>{
      if(window.innerWidth <= 500){setVisible(false)}
    },[])
    const openView = (e) => {
      e.preventDefault();
      setVisible(!isVisible)
    }
    return (
      <div className="toDoContainer">
        <div className="title-container">
            <h4>TODO:</h4>
            <button type="button" className="visibility btn-visibility" onClick={openView}>{isVisible?<i class="fas fa-chevron-up"></i>:<i class="fas fa-chevron-down"></i>}</button>
        </div>
        {isVisible?
        <div className='card-container'>
        {/* <div className={isVisible?"card-container":"card-container invisible"}> */}
          {
            arrToDo.map( item => {
              return(
              <ToDo 
              item= {item}
              key = {item.id}
              onStatusChange = {handleChange}
              removeItem = {removeItem}
              />
              )
            })
          }  

        </div>:null}
        
      </div>
    )
}

export default TodoContainer
