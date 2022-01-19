import React, { Component } from 'react';
import jsonData from './data.json';
import './Parent.css';
import Child from './Child.js';
export default class Parent extends Component {
    constructor(props)
    {
        super(props)
    }
  render() {

    if(this.props.value==1)
    {
        jsonData.sort((a, b)=>(a.name>b.name) ? 1:-1)
    }
    if(this.props.value==2)
    {
        jsonData.sort((a,b)=>(new Date(a.birthDate).valueOf()-new Date(b.birthDate).valueOf()))
    }
    return <div>      
<>
<br></br>
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
            </tr>
          </thead>
          <tbody>
            {
              jsonData.map(val => {
                return (
                  <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.birthDate}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
    </>


    </div>;
  }
}
