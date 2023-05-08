import React,{useEffect, useState} from 'react';
import StudentRegistration from './components/Registration/StudentRegistration';
import Home from './components/Home/index';
import Dashboard from './components/Dashboard/index';
import Instructor from './components/Instructor/index';
import HomePage from './components/HomePage/index';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
 

function App() {




  return (
    <Routes>
      <Route path="/login" element={ <StudentRegistration/>} />
      <Route path="/dashboard" element={ <PrivateRoute> <Dashboard/>  </PrivateRoute>} />
      <Route path='/' element={ <Home/>} /> 
      <Route path='/instructor' element={  <PrivateRoute> <Instructor/> </PrivateRoute>  } /> 
      <Route path='/homepage' element={  <PrivateRoute> < HomePage/> </PrivateRoute>  } />
    </Routes>
  );  
}

export default App;
