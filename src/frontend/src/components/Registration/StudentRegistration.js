import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentRegistration.css";
import {  useNavigate } from "react-router-dom";
import { useUser } from "../../userProvider";
import Swal from "sweetalert2";



const StudentRegistration = () => {
  const user  = useUser();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(()=>{
  //   if(user.jwt) navigate("/dashboard");
  // },[user]);

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
          
      setErrorMsg("");
    const reqBody = {
      email : formData.email,
      password : formData.password
    };


    fetch("authenticate/login",{
      headers:{
        "Content-Type": "application/json",
      },
    
      method : "post",
      body : JSON.stringify(reqBody),
    }).then((response) => {
      if (response.status === 200) return response.text();
      else if (response.status === 401 || response.status === 403) {
        setErrorMsg("Invalid username or password");
      } else {
        setErrorMsg(
          "Something went wrong,"
        );
      }
    })
    .then((data) => {
      if (data) {
        user.setJwt(data);
        var token = JSON.parse(data).token;
        localStorage.setItem("BearerToken", token)
        navigate("/dashboard");
      }
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
        Swal.fire({
          icon: "success",
          title: "Հաստատված է",
          iconColor: "#850c23",
          confirmButtonColor: "#850c23",
          confirmButtonText: "Լավ",
          customClass: {
            title: "my-swal-title-class",
          },
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
    <div id = "my-page">
    <div class="wrapper">
      <div class="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLogin} />
          <input type="radio" name="slide" id="signup" checked={!isLogin} />
          <label htmlFor="login" class="slide login" onClick={() => setIsLogin(true)}>
            Մուտք գործել
          </label>
          <label htmlFor="signup" class="slide signup" onClick={() => setIsLogin(false)}>
            Ստեղծել նոր հաշիվ
          </label>
          <div class="slider-tab"></div>
        </div>
        <div class="form-inner">
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                <div class="field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Էլփոստ"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Գաղտնաբառ"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div class="field">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Անուն"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Ազգանուն"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Էլփոստ"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Տարիք"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Գաղտնաբառ"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Հաստատել գաղտնաբառը"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <button type="submit" id="reg" class="btn btn-rounded btn-primary btn-block" >{isLogin ? "Մուտք գործել" : "Ստեղծել"}</button>
          </form>
          <div class="form-text">
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
                  Մուտք գործել
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
  