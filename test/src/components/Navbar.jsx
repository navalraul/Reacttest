import React from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const router = useNavigate();


  return (
    <div id='Nmain'>
      <div className='left'>
        <h2>Todos</h2>
        <h2 onClick={ ()=> router('/all-todo')}>All Todos</h2>
      </div>
      <div className='right'>
        <h2 onClick={ () => router('/add-todo')}>Add todos</h2>
        <h2>Logout</h2>
      </div>
    </div>
  )
}

export default Navbar
