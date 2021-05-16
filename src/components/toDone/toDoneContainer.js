import React from 'react'
import ToDone from './toDone'

const toDoneContainer = ({handleChange, arrToDone,removeItem}) => {
 
    return (
        <div className="toDoneContainer">
             <h4>BACKLOG:</h4>
        <div>
          {
            arrToDone.map( item => {
                console.log(item)
              return(
                <ToDone
                item = {item}
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

export default toDoneContainer
