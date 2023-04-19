import React,{useEffect, useState} from 'react';
import StudentRegistration from './components/Registration/StudentRegistration';
import Home from './components/Home/index';
import Dashboard from './components/Dashboard/index';
import Schedule1 from './components/Schedule1/index';
import { useLocalState } from './util/useLocalStorage';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';



function App() {

const [jwt , setJwt ] =  useLocalState("", "jwt");

// const [someValue , setSomeValue] = useState("");



  return (
    <Routes>
      <Route path="/login" element={ <StudentRegistration/>} />
      <Route path="/dashboard" element={  <PrivateRoute> <Dashboard/>  </PrivateRoute>} />
      <Route path='/' element={ <Home/>} /> 
      <Route path='/schedule' element={ <Schedule1/>} /> 
    </Routes>
  );
}

export default App;
