import React from 'react'
import ToDone from './toDone'

const toDoneContainer = ({handleChange, arrToDone,removeItem}) => {
 
    return (
        <div>
             <h4>BACKLOG:</h4>
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
    )
}

export default toDoneContainer
