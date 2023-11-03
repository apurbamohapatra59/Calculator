import React from 'react';
import "./Input.css";
function Input({data,answer}) {
  return (
    <div className='field'>
        <div className='answer'>
           <h1>{answer}</h1>
          </div>
        <div className='input'>
          <h1> {data}</h1>
          </div>
        
    </div>
  );
};

export default Input;
