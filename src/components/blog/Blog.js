import React, { Component } from 'react';

class Blog extends Component {




    render () {
        return (
            <div className="col-md-4">
                <div className="card mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1476950648868-16c7dca9499c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title
                            and
                            make up the bulk of the card's content.</p>
                        <button className="btn btn-primary btn-block" onClick={()=>this.props.ShowAlert(this.props.item)}>Alert</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
