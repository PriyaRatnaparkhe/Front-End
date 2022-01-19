import React, { useState } from 'react';
import Parent from './Parent';

export default function () {
    const [value,setValue]=useState(0);
  
    function byName(){
        setValue(1);
    }
    function byAge(){
    
        setValue(2);
    }

  return (<div>
    <h3>Assignment 3</h3>
<input type="radio" name="sortBy" value="1" onClick={ byName }/>Sort by name
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="radio" name="sortBy" value="2" onClick={byAge }/> Sort by age
<Parent value={value}></Parent>
  </div>)
}
