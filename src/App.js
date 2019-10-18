import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Countries from './components/country/Countries';
import Home from './components/Home';
import CountryInfo from './components/country/CountryInfo';
import NotFound from './components/error/NotFound';

class App extends Component {
  render () {
    return (
      <Router>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/countries" component={Countries}/>
          <Route exact path="/countries/:id([0-9]+)" component={CountryInfo}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
