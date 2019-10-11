import React, { Component } from 'react';

export default class Citation extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card cardStyle">
                            <img className="card-img-top" src="https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2019-04/simpsons_familydressdance_2019_r4_original.jpg?itok=cZc30J_p" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Citation :</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Like</a>
                                <a href="#" className="btn btn-danger">Dislike</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}