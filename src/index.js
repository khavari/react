import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
