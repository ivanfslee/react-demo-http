import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Headers from './Headers';
import Modal from './Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: '', 
      cityName: '',
      weather: '',
      high: '',
      low: '', 
      icon: '',
      isRaining: ''
    }
  }

  componentDidMount() {
    this.getCityWeather('London');

    var elems = document.querySelectorAll('.modal'); //get everything with class modal
    var instances = window.M.Modal.init(elems); //materialize modal everything with class modal
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes('rain'); //returns boolean
      if (isRaining) {
        this.setState({
          isRaining:'Rain rain go away'
        })
      }
    }
  }

  searchCity = (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value; //get value from input box 
    this.getCityWeather(city);
  }

  getCityWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
    axios.get(url).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        high: res.data.main.temp_max,
        low: res.data.main.temp_min,
        weather: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        cityName: res.data.name,
        isRaining: res.data.weather.includes('rain')
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <Headers temp={this.state.temp} isRaining={this.state.isRaining} />
            {/* Modal Trigger from materialize */}
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
            <form onSubmit={this.searchCity}>  
              <input type="text" id="city" placeholder="Enter a City Name"></input>
            </form>
          </div>
        </div>  
        {/* Modal Structure from materialize*/}
        <Modal 
          cityName={this.state.cityName}
          high={this.state.high}
          low={this.state.low}
          weather={this.state.weather}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default App; 