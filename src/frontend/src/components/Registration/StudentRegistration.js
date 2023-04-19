import React, { useState } from "react";
import axios from "axios";
import "./StudentRegistration.css";
import { useLocalState } from '../../util/useLocalStorage';
import { message } from "antd";
import ajax from "../../Services/fetchService";



function StudentRegistration() {
  const [jwt , setJwt ] =  useLocalState("", "jwt");

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isLogin) {
        // // const response = await axios.post('http://localhost:8080/authenticate/login', {
        // //   email: formData.email,
        // //   password: formData.password
        // // });
        // // console.log(response.data);
        
        console.log("Im sending a request");
          
  
    const reqBody = {
      email : formData.email,
      password : formData.password
    };


    // ajax("authenticate/login",null,)
    fetch("authenticate/login",{
      headers:{
        "Content-Type": "application/json",
      },
    
      method : "post",
      body : JSON.stringify(reqBody),
    }).then((response) => {
        if(response.status === 200)
          return Promise.all([response.json(), response.headers]);
        else return Promise.reject("Invalid login or password");
      })
      .then(([body,headers]) =>{ 
         setJwt(headers.get("authorization"));
         window.location.href = "dashboard";
    }).catch((message) =>{
        alert(message);
    });
  




 
        
      } else {
        const response = await axios.post('http://localhost:8080/authenticate/register', {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          age: formData.age,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        });
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
       <div class="body">
    <div className="wrapper">
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLogin} />
          <input type="radio" name="slide" id="signup" checked={!isLogin} />
          <label htmlFor="login" className="slide login" onClick={() => setIsLogin(true)}>
            Login
          </label>
          <label htmlFor="signup" className="slide signup" onClick={() => setIsLogin(false)}>
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                <div className="field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="field">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Age"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <button type="submit" id="reg" class="btn btn-rounded btn-primary btn-block" >{isLogin ? "Login" : "Signup"}</button>
          </form>
          <div className="form-text">
                        {isLogin ? (
                <>
                 Don't have an account?{" "}
                <button type="button" onClick={handleSwitchMode}>
                Signup
                </button>
                  </>
                     ) : (
                <>
                   Already have an account?{" "}
                  <button type="button" onClick={handleSwitchMode}>
                    Login
                      </button>
                  </>
                  )}
                  </div>

        </div>
      </div>
    </div>
    </div>
  );
}






export default StudentRegistration;
  