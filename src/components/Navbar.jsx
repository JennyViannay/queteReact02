import React, { Component } from 'react';
import Users from './Users';

export default class Navbar extends Component {
    users = [
        {
          name : "John",
          status : true,
          avatar : "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/37557628_1765612036868442_9043482348183617536_n.jpg?_nc_cat=103&_nc_oc=AQlwV-DPOH9mlNCb9HTtMF9iub1UzaE1KzMYNhFmhR8Yu2W1tSskSlIOEaD6GcBi0x8&_nc_ht=scontent-cdg2-1.xx&oh=22f76a26c05c3d12a81ad518e06e15cb&oe=5E29208F"
        }
      ];

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">QUETES REACT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <div>
                        {this.users.map(user => {
                        return (<Users users = {user}/>)
                        })}
                    </div>
                </div>
            </nav>
        )
    }
}