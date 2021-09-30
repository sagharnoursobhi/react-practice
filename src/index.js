import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Test from './app/Test'
import Test2 from './app/Test2'

ReactDOM.render(
  <React.StrictMode>
    <Test />
    <Test2/>
  </React.StrictMode>,
  document.getElementById('root')
);
