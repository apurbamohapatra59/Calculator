import * as math from "mathjs";
import { useState } from 'react';
import './App.css';
import Key from './components/key';
import Input from './components/Text';

const  App= () => {
   
 const [data, setData]=useState("")

 const [answer, setAnswer]=useState("")

const update=(e)=>{
  setData((data)=>[...data, e + ""]);
};

const clear2 = () => {
  setData("");
  setAnswer("");
};

const calcResult= () =>{
  const input=data.join("")
  setAnswer(math.evaluate(input));
}


  return (
   <div className='App'>
      <div className='keys'>
        <Input data={data} answer={answer}/>
        <div className='row'>
        <Key props="7" handleClick={update}/>
        <Key props="8" handleClick={update}/>
        <Key props="9" handleClick={update}/>
        <Key props="/" handleClick={update}/>
        </div>
        <div className='row'>
        <Key props="4" handleClick={update}/>
        <Key props="5" handleClick={update}/>
        <Key props="6" handleClick={update}/>
        <Key props="*" handleClick={update}/>
        </div>
        <div className='row'>
        <Key props="1" handleClick={update}/>
        <Key props="2" handleClick={update}/>
        <Key props="3" handleClick={update}/>
        <Key props="+" handleClick={update}/>
        </div>
        <div className='row'>
        <Key props="0" handleClick={update}/>
        <Key props="." handleClick={update}/>
        <Key props="=" handleClick={calcResult}/>
        <Key props="-" handleClick={update}/>
        </div>
        <Key props="clear"handleClick={clear2}/>
      </div>
    </div>
  );
}

export default App;
