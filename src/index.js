import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./firstComponent"
import MyComponent from './mycomponent';



ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
    <FirstComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

