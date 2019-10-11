import React, { Component } from 'react';
import Users from './Users';
import MyCountdown from './MyCountdown';

const user = 
    {
      name : "Jenny",
      status : true,
      avatar : "https://avatars3.githubusercontent.com/u/32166518?s=400&u=807a045773fff51619d0cb2e23d208a083e95660&v=4"
    }; 

export default class Navbar extends Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        status: this.props.status
    }

    render() {
        const { id, name, status } = this.state;
        console.log(this.state);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <div>
                    <Users 
                            name = {user.name}
                            avatar = {user.avatar}
                            status = {user.status}
                    />
                </div>
                <a className="navbar-brand" href="#">
                    QUETES REACT ||
                </a>
                 
                <div className="countdown">
                    Temps restant avant le 02/04/2020 <MyCountdown />
                </div>
            </nav>
        )
    }
}