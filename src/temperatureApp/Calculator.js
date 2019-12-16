import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';


class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
            temperature: 20,
            scale: 'C'
        };
    }
  
    handleChange(e, scale) {
      this.setState({
            temperature: e.target.value,
            scale: scale
        });
    }
  
    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        let fTemp;
        let cTemp;
        if (scale === 'C') {
            fTemp = Math.round((temperature * 9 / 5) + 32);
            // we dont need to convert to celsius because it is in celsius
            cTemp = temperature
        } else if (scale === 'F') {
            //convert f to celsius
            cTemp = Math.round((temperature - 32) * 5 / 9);
            fTemp = temperature
        }

      return (
        <fieldset> 
            <TemperatureInput scale="F" handleChange={this.handleChange} temperature={fTemp} />
            <TemperatureInput scale="C" handleChange={this.handleChange} temperature={cTemp} />
          <BoilingVerdict
            celsius={parseFloat(cTemp)} />
        </fieldset>
      );
    }
  }

export default Calculator;