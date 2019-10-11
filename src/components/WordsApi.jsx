import React, { Component } from 'react';
import { METHODS } from 'http';



export default class WordsApi extends Component {
    state = {
        nasa: []
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=e6pkYFG544OtsjGAvwrmbnehsrJL4d8dVHl01Zxr')
        .then(res => res.json())
        .then((data) => {
          this.setState({ nasa: data })
        })
        .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                  {console.log(this.state.nasa)}
                </div>
            </div>
            
        )
    }
}

// Account Email: jenny.viannay75@gmail.com
// Account ID: ccc83593-60fc-4380-91d2-182f8db8681c