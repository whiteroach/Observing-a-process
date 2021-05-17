import React from 'react'

const toDone = ({item, onStatusChange,removeItem}) => {
    return (
        <div>
            <div className='todone-card card'>
                <p>{item.task}</p>
                <p>{item.description}</p>
                <div className="btn-todo-container">
                    <button className="btn-toDone" onClick = {()=> {onStatusChange(item.id)}} ><i class="fas fa-sync"></i></button>
                    <button className="btn-toDone" onClick = {()=> {removeItem(item)}} ><i class="fas fa-redo-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default toDone
