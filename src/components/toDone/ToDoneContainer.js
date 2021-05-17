import React,{useState, useEffect} from 'react'
import ToDone from './toDone'

const ToDoneContainer = ({handleChange, arrToDone,removeItem}) => {
    const [isVisible,setVisible] = useState(true);
    useEffect(()=>{
      if(window.innerWidth <= 500){setVisible(false)}
    },[])
    const openView = (e) => {
      e.preventDefault();
      setVisible(!isVisible)
    }
    return (
        <div className="toDoneContainer">
          <div className="title-container">
            <h4>BACKLOG:</h4>
            <button type="button" className="visibility btn-visibility" onClick={openView}>{isVisible?<i class="fas fa-chevron-up"></i>:<i class="fas fa-chevron-down"></i>}</button>
          </div>
        {isVisible?
        <div className="card-container">
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
        </div>:null}
        </div>
    )
}

export default ToDoneContainer
