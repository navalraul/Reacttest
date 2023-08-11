import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userData, setUserData] = useState({email: "", password: ""});
    const router = useNavigate();

    const handleChange=(event)=>{
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=> {
        event.preventDefault();
        
        if (userData.email && userData.password) {

            let flag = false
            const users = JSON.parse(localStorage.getItem("Users")) || [];
            for (var i = 0; i< users.length; i++) {
                if(users[i].email == userData.email && users[i].password == userData.password) {
                    flag=true;
                    localStorage.setItem("Current-user", JSON.stringify(userData))
                    setUserData({email: "", password: ""})
                    router('/')
                }
            }
            alert("Login Successful")
        } else {
            alert("All fields are ")
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br/>
        <input type='email' onChange={handleChange} name='email' /><br/>
        <label>Password:</label><br/>
        <input type='password' onChange={handleChange} name='password' /><br/>
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login;
