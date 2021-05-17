import React from 'react'

const todo = ({onStatusChange,item,removeItem}) => {
    return (
        <div>
            <div className='todo-card card'>
                <p>{item.task}</p>
                <p>{item.description}</p>
                <div className="btn-todo-container">
                    <button className="btn-todo" onClick = {() => {onStatusChange(item.id)}}><i class="fas fa-check"></i></button>
                    <button className="btn-todo" onClick = {()=> {removeItem(item)}} ><i class="fas fa-redo-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default todo
