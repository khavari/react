import React, { Component } from 'react';
import Blog from './Blog';

class Blogs extends Component {

    state = {
        items: [1, 92, 3, 4, 5, 6, 7, 89, 9],
        count: 0
    };

    ShowAlert = (n) => {
        console.log(n);
        this.setState({count: this.state.count + 1});
    };

    render () {
        return (
            <div>

                <div className="container mt-5">
                    <h1>{this.state.count}</h1>
                    <div className="row">
                        {this.state.items.map((item, index) => {
                            return (
                                <Blog item={item} key={index} ShowAlert={this.ShowAlert}/>
                            );
                        })}
                    </div>
                </div>


            </div>
        );
    }
}

export default Blogs;
