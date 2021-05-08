import React from 'react'

const todo = ({onStatusChange,item,removeItem}) => {
    return (
        <div>
            <div className='todo-card'>
                <p>{item.task}</p>
                <p>{item.description}</p>
                <button onClick = {() => {onStatusChange(item.id)}}><i class="fas fa-check"></i></button>
                <button onClick = {()=> {removeItem(item)}} ><i class="fas fa-redo-alt"></i></button>
            </div>
        </div>
    )
}

export default todo
