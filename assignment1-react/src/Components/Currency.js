import { getAllByTestId } from '@testing-library/react';
import React, {useState} from 'react'

export default function Currency() { 
const[inputVal,setData]=useState(null)
const[toSelect,toSetSelects]=useState(1);
const[fromSelect,fromSetSelects]=useState(4);
const[result,setResult]=useState();
 function getData(val)
{
    setData(val.target.value)
}
function buttonClicked()
{  
if(toSelect==1 && fromSelect==4)
{
   let inrCur=inputVal
   setResult(inrCur)
}
if(toSelect==1 && fromSelect==5)
{
let usdCur=inputVal* 0.013;
setResult(usdCur)
}

if(toSelect==1 && fromSelect==6)
{
let eurCur=inputVal*0.012
setResult(eurCur)
}

if(toSelect==2 && fromSelect==4)
{
let inrCur=inputVal*74.42
setResult(inrCur)
}
if(toSelect==2 && fromSelect==5)
{
let usdCur=inputVal
setResult(usdCur)
}
if(toSelect==2 && fromSelect==6)
{
let eurCur=inputVal*0.88
setResult(eurCur)
}
if(toSelect==3 && fromSelect==4)
{
var inrCur=inputVal*84.83
setResult(inrCur)
}
if(toSelect==3 && fromSelect==5)
{
var usdCur=inputVal*1.14
setResult(usdCur)
}
if(toSelect==3 && fromSelect==6)
{
var eurCur=inputVal
setResult(eurCur)
}
}

    return (
        <div className='App'>
           
            <h1> Currency Converter</h1>
            <br></br>
            <h3>Enter a value</h3>
            <input type="text" onChange={getData}/>
            <br></br><br></br>
            <select id="to" value={toSelect} onChange={e=>toSetSelects(e.target.value)}>
            <option value="1"> INR </option>
            <option value="2"> USD </option>
            <option value="3"> EUR </option>
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <select id="from" value={fromSelect} onChange={r=>fromSetSelects(r.target.value)}> 
            <option value="4"> INR </option>
            <option value="5"> USD </option>
            <option value="6"> EUR </option>
            </select>
            <br></br><br></br>
            <button onClick={buttonClicked}>Convert Currency !</button>
            <br></br>
            <h4>Converted Value:</h4>
            <p>{result}</p>
        </div>
    )
}
