import React from 'react';
import "./home.css";
import {  useNavigate } from "react-router-dom";


const index = () => {
  return (


<div>
 <header class="header">
  <div class="logo">National Polytechnic University of Armenia</div>
  <nav class="nav-items">
    <a href="https://polytech.am/en/home/">Գլխավոր կայք</a>
    
  
  </nav>
</header>   
<main>
  <div class="intro">
    <h1>Դասացուցակներ</h1>
    <p>Հայաստանի ազգային պոլիտեխնիկական համալսարան</p>
    <button><a href="/dashboard">Մուտք գործել</a></button>
  </div>
  <div class="achievements">
    <div class="work">
      <i class="fas fa-atom"></i>
      <p class="work-heading">Welcome to the second website of the Polytechnic University</p>
      <p class="work-text">Կայքը նախատեսված է համալսարանի ուսանողներին ավելի հեշտ օգտվել դասացուցակից և ստանալ ձեզ հետաքրքրող ինֆորմացիան </p>
    </div>

  </div>
</main>






</div>



  );
};

export default index;