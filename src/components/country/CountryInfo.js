import React, { Component } from 'react';
import data from './data.json';
import { Link } from 'react-router-dom';
import MetaTags from '../layout/MetaTags';

class CountryInfo extends Component {

  state = {
    meta: {
      title: 'title 1',
      keywords: 'keywords 1',
      description: 'description 1',
      image: 'https://metraj.com/assets/web/img/metraj.jpg',
      canonical: 'canonical 1',
    },
    id: this.props.match.params.id,
    country: {},
  };

  componentWillMount () {
    this.setState({country: data[this.state.id]});
  }

  render () {

    return (
      <div>
        <MetaTags meta={this.state.meta}/>

        <Link to="/countries">Back To List of Countries</Link>

        <h2>{this.state.country.name}</h2>
      </div>
    );
  }
}

export default CountryInfo;
