import React from 'react';

class Modal extends React.Component {
    render() {
        const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`
        
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>{this.props.cityName}</h4>
                    <p>High: {this.props.high} - Low: {this.props.low} </p>
                    <p>{this.props.weather} <img alt="weather" src={iconUrl}/> </p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok</a>
                </div>
            </div>
        );
    }
}

export default Modal;