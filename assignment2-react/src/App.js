import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {

  const [data, setdata] = useState([]);
  const [isVisible, setVisible] = useState(false)
  function buttonClicked() {
    setVisible(true)
    // console.log(showResults)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setdata(res.data));
  }



  return (
    <>
    <h2>Assignment 2</h2>
    <br></br>
    <h3>User's data </h3>
    <br></br>
      <button onClick={() => buttonClicked()}>Click me !!</button>
      <br></br>
      {isVisible ?
        <table >
          <thead>
            <tr>
              <th>User Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(val => {
                return (
                  <tr key={val.id}>
                    <td>{val.userId}</td>
                    <td>{val.title}</td>
                    <td>{val.body}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        : <div></div>}
    </>
  
  );
}

export default App;
