import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: '', 
      cityName: '',
      weather: '',
      high: '',
      low: '', 
      icon: ''
    }
  }

  componentDidMount() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
    axios.get(url).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        high: res.data.main.temp_max,
        low: res.data.main.temp_min,
        weather: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        cityName: res.data.name
      })
    });

    var elems = document.querySelectorAll('.modal'); //get everything with class modal
    var instances = window.M.Modal.init(elems); //materialize modal everything with class modal
  }

  searchCity = (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value; //get value from input box 
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
    axios.get(url).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        high: res.data.main.temp_max,
        low: res.data.main.temp_min,
        weather: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        cityName: res.data.name
      })
    });
  }

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`

    return (
      <div className="App">
      <div className="row">
        <div className="col s6 offset-s3">
          <h1>{this.state.temp}</h1>
          
          {/* Modal Trigger from materialize */}
          <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
          <form onSubmit={this.searchCity}>  
            <input type="text" id="city" placeholder="Enter a City Name"></input>
          </form>
        </div>
      </div>  
        {/* Modal Structure from materialize*/}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.cityName}</h4>
            <p>High: {this.state.high} - Low: {this.state.low} </p>
            <p>{this.state.weather} <img alt="weather" src={iconUrl}/> </p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 