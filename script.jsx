import React from 'react';
import ReactDOM from 'react-dom';
// script.jsx

function Hello() {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
