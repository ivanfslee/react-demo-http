import React from 'react';
// import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
    axios.get(url).then((res) => {
      console.log(res.data)
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sanity sdfdfdfdf</h1>
      </div>
    );
  }
}

export default App;