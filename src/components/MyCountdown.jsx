import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

const now = Date.now();
const end = new Date('02 Apr 2020 06:02:03');
const diff = end - now;
const rest = now + diff;

export default class MyCountdown extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <Countdown date={rest} />
                </div>
            </div>
            
        )
    }
}