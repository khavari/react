import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

class List extends Component {

  state = {
    list: [1, 254, 5, 4, 1, 456, 6, 9, 8, 4, 2, 5, 6, 3, 54, 54]
  };

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-hover table-striped">
              <tbody>
              {this.state.list.map(function(item,index){
                return(
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item}</td>
                    <td>Consectetur.</td>
                    <td>Nobis?</td>
                  </tr>
                );
              })}
              </tbody>

            </table>
            <Button variant="primary" block={true} >Click me!</Button>
          </div>
        </div>


        <div className="row">

          <div className="col-12">


            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.kerrisdalepharmacy.com/wp/wp-content/uploads/2019/05/flowers-1600x500-1024x320.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.kerrisdalepharmacy.com/wp/wp-content/uploads/2019/05/flowers-1600x500-1024x320.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.kerrisdalepharmacy.com/wp/wp-content/uploads/2019/05/flowers-1600x500-1024x320.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>


          </div>


        </div>
      </div>
    );
  }
}

export default List;
