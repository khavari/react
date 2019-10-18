import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

class MetaTags extends PureComponent {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>{this.props.meta.title}</title>
          <meta name="description" content={this.props.meta.description}/>
          <link rel="canonical" href={this.props.meta.canonical}/>
          <meta name="image" content={this.props.meta.image}/>

          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <link rel="apple-touch-icon" href="logo192.png"/>
        </Helmet>
      </div>
    );
  }
}

export default MetaTags;
