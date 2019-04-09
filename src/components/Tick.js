import React from 'react';
import ReactDOM from 'react-dom';

export default function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('time')
    );
  }
  
  setInterval(tick, 1000);