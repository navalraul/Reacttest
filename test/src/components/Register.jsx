
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData, setUserData] = useState({name: "", email: "", password: ""});
    const router = useNavigate();

    const handleChange=(event)=> {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password) {

            const Ls = JSON.parse(localStorage.getItem("Users")) || [];
            const userObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                addtodo: []
            };
            Ls.push(userObj);
            localStorage.setItem("Users",JSON.stringify(Ls))
            setUserData({name: "", email: "", password: ""})
            alert("Register successfull...")
            router('/login')
        } else {
            alert("All fields are mandatory")
        }
        
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input type='text' name='name' onChange={handleChange} /><br/>
        <label>Email:</label><br/>
        <input type='email' name='email' onChange={handleChange} /><br/>
        <label>Password:</label><br/>
        <input type='password' name='password' onChange={handleChange} /><br/>
        <input type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register
