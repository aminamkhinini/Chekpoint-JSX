
import './App.css';
import React,{NewComponent}from 'react';
import image1 from "./img1.jpg";
import './style.css';
function App() {
  return (
<div className="App" >

<div style={{border: 'solid 1px black', maxWidth: '100vw',position:'center'}}>
          <h1  className={`title red`} >Amina Mkhinini</h1>
          <br/>
          <img src={image1} alt ="img1" className="image1" />
          <br/>
          <img src="/img2.jpg" alt="img2"className="image1"/>
        </div>
        <video width={320} height={240} controls>
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
export default App;




        

