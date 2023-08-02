
import React from "react";
// import App from "./App.css";
const Card = () =>{
    const x = 50;
    const k = "orang"
  return (
    <div class = "maincard">Card
    <h1 style={{fontSize:"20px",color:k}}>Welcome To Here!!</h1>
        <h1 style={{fontSize:`${x}px`,color:"red"}}>Welcome To Here!!</h1>
        <h2 style={{fontSize:"20px",color:"blue"}}>Welcome To Here!!</h2>
        <h3 style={{fontSize:x+"px",color:"yellow"}}>Welcome To Here!!</h3>
        
    </div>
    
  );
}
export default Card