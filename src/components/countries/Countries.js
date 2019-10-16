import React, { Component } from 'react';
import './Countries.css';
import data from './data.json';

class Countries extends Component {

  state = {
    countries: data,
  };

  render () {
    return (
      <section className="component-countries">

        <div className="container">
          <div className="row">

            {this.state.countries.map((country, index) => {

              return (
                <div className="col-12 col-sm-6 col-md-4" key={index}>
                  <div className="card component-country mb-3">
                    <div className="card-header">
                      <img src={country.flag} className="card-img-top" alt={country.name}/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{country.name}</h5>
                      <p className="card-text">{country.numericCode}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
              );

            })}
          </div>
        </div>


      </section>
    );
  }

}

export default Countries;
