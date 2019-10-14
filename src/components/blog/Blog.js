import React, { Component } from 'react';

class Blog extends Component {

    state = {
        items: [1, 92, 3, 4, 5, 6, 7, 89, 9]
    };

    render () {
        return (
            <div>

                <div className="container mt-5">
                    <div className="row">
                        {this.state.items.map(function (item,index) {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card mb-4">
                                        <img src="https://images.unsplash.com/photo-1476950648868-16c7dca9499c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                             className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-text">Some quick example text to build on the card title
                                                and
                                                make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        );
    }
}

export default Blog;
