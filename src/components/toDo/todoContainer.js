import React from 'react';
import ToDo from './todo'

const todoContainer = ({arrToDo, handleChange, removeItem}) => {
    return (
        <div>
          <h4>TODO:</h4>
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
    )
}

export default todoContainer