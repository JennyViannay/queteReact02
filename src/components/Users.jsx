import React, { Component } from 'react';

export default class Users extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="Contact">
                    <div className="avatar"><img src={this.props.users.avatar} alt="avatar" className="avatar"/></div>
                    <div className = "status">
                        <cite className = {this.props.users.status ? "status-online" : "status-offline"}></cite>
                        <cite className = "status-text">
                            {this.props.users.status ? "online" : "offline"}
                        </cite>
                        <div className="name">{this.props.users.name}</div>
                    </div>
                </div>
            </div>
            
        )
    }   
}