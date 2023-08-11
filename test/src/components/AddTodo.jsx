
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTodo = () => {

    const [ todoData, setTodoData ] = useState({subject: "", description: ""})
    const router = useNavigate();

    const handleChange=(event)=>{
        setTodoData({...todoData,[event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=> {
        event.preventDefault();
        if(todoData.subject && todoData.description) {

            const product= JSON.parse(localStorage.getItem("Todo")) || [];
            const userPro = {
                subject: todoData.subject,
                description: todoData.description
            };
            product.push(userPro)
            localStorage.setItem("Todo",JSON.stringify(product))
            setTodoData({subject: "", description: ""})
            alert("Added todos")
        } else{
            alert("All fields are mandatory")
        }
        
    }

  return (
    <div>
        <h2>Add Todos</h2>
      <form onSubmit={handleSubmit}>
        <label>Subject:</label><br/>
        <input type='text' onChange={handleChange} name='subject' /><br/>
        <label>Description:</label><br/>
        <input type='text' onChange={handleChange} name='description' /><br/>
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default AddTodo
