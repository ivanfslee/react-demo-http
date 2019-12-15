import React from 'react';

class FormPractice extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(this.state.name);
        //do not get value of input box through the dom - we want to get value via state
        //another way to get value of input box -> const name = document.getElementById('name').value;
        // console.log(name);
        //console.dir(e.target) another way to get value through event/dom
    }

    handleChange = e => {
        // console.dir(e.target);
        
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name);
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col s6 offset-sm-3">
                        <form onSubmit={this.handleSubmit}>
                            <input value={this.state.name} onChange={this.handleChange} type="text" id="name" placeholder="Enter name" />
                            <input type="submit" value="submit" />
                        </form>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default FormPractice;