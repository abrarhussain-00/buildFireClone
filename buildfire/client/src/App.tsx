import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Form } from './components/Form';
import { Login } from './components/Login';
import { Welcome } from './components/Welcome';
import {Routes, Route} from 'react-router-dom';
import { GetStarted } from './components/GetStarted';
import { ResetPassword } from './components/ResetPassword';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/demo' element={ <Form/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/welcome' element={ <Welcome/> }/>
        <Route path='/get-started' element={ <GetStarted/> }/>
        <Route path='/reset' element={ <ResetPassword/> }/>

        {/* <Route path='/users/:id/edit' element={ <Form/>}/>
        <Route path='/users/:id' element={ <Form/>}/>
        <Route path='/users/new' element={ <Form/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
