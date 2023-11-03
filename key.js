import React from "react";
import "./Key.css";
const key=({props,handleClick}) =>{
    return(
   <div
   onClick={() => handleClick(props)}
   
   className="button"> {props} </div>
   )};

   
export default key;