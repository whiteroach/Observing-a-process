import React from 'react';
import ToDo from './todo'

const todoContainer = ({arrToDo, handleChange, removeItem}) => {
    return (
        <div className="toDoContainer">
          <h4>TODO:</h4>
        <div>
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

        </div>
        </div>
    )
}

export default todoContainer
