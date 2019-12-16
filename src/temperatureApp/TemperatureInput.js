import React from 'react';

class TemperatureInput extends React.Component {
    render() {
        const temperature = this.props.temperature;
        return (
            <div>
                <legend>Enter temperature in {this.props.scale}:</legend>
                <input
                    value={temperature}
                    onChange={(e) => this.props.handleChange(e, this.props.scale)} />
            </div>           
        );
    }
}

export default TemperatureInput;