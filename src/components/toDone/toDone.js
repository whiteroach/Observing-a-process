import React from 'react'

const toDone = ({item, onStatusChange,removeItem}) => {
    return (
        <div>
            <div className='todone-card'>
                <p>{item.task}</p>
                <p>{item.description}</p>
                <button onClick = {()=> {onStatusChange(item.id)}} ><i class="fas fa-sync"></i></button>
                <button onClick = {()=> {removeItem(item)}} ><i class="fas fa-redo-alt"></i></button>
            </div>
        </div>
    )
}

export default toDone
