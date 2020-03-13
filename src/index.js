import React from "react"
import ReactDOM from"react-dom"

const currentTime = new Date().getHours();
const cutomStyle ={ color: ""};
let greeting;

if (currentTime<12){
greeting="Good morning!"
cutomStyle.color="red"
}else if(currentTime<18){
greeting="Good Afternoon"
cutomStyle.color="green"
}else{
  greeting="Good Night!"
  cutomStyle.color="blue"
}




ReactDOM.render(<h1 className="heading" style={cutomStyle}>{greeting}</h1>
  ,document.getElementById("root"))