// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddTodo from './components/AddTodo';
import AllTodo from './components/AllTodo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/add-todo' element={<AddTodo />} />
        <Route exact path='/all-todo' element={<AllTodo />} />
      </Routes>
    </div>
  );
}

export default App;
