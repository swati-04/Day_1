import React from 'react';
import ReactDOM from 'react-dom';
import Bookstore from './Bookstore';
// import FirstComponent from "./firstComponent"
// import MyComponent from './mycomponent';
// import NestedComponent from './NestedComponent';



ReactDOM.render(
  <React.StrictMode>
    {/* <MyComponent />
    <FirstComponent /> */}
    {/* <NestedComponent /> */}
    <Bookstore />

  </React.StrictMode>,
  document.getElementById('root')
);

