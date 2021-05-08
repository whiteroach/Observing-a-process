import React,{useState} from 'react'

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
        <div>
            <form onSubmit={handleSubmit}>
              <div className='input-text'>
                  <label for='task'>Task: </label>
                  <input name = 'task' value={formState.task} type='text' id='task-input' onChange={handleChange} />
              </div>
              <div className='description-text'>
                  <label for='description'>Description: </label>
                  <textarea name = 'description' value={formState.description}  id='description-input' name='description' onChange={handleChange} />
              </div>
              <input className='btn-form' type='submit' value='ADD' />
            </form>
        </div>
    )
}

export default Form
