import React,{useState} from 'react'
import Process from '../images/QUIETWHITE.svg'
import Eye from '../images/visibility_white_24dp.svg'
const Form = ({handleAddTodo}) => {
    const [formState, setForm] = useState({task:'',description:''})

    const handleSubmit = e => {
        e.preventDefault();
        if(formState.task !== '' || formState.description !== ''){
          handleAddTodo(formState.task, formState.description);
          
          setForm({
            task:'',
            description:''
          })
        }
    }

    const handleChange = e => {
		setForm({
      ...formState,
			[e.target.name]:e.target.value,
		});
	  };
    
    return (
    
        <div className="form">
          <div className="bg-pic">
            <div className="pic">
              <img src={Process} width="200px"/>
              <img src={Eye}/>
            </div>

          </div>
            <form onSubmit={handleSubmit}>
              <div className='input-text'>
                  <label for='task'>Task: </label>
                  <br></br>
                  <input name = 'task' value={formState.task} type='text' id='task-input' onChange={handleChange} />
              </div>
              <div className='description-text'>
                  <label for='description'>Description: </label>
                  <br></br>
                  <textarea name = 'description' value={formState.description}  id='description-input' name='description' onChange={handleChange} />
              </div>
              <input className='btn-form' type='submit' value='ADD' />
            </form>
        </div>
           
    )
}

export default Form
