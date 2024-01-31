// script.jsx
const React = require('react');
const ReactDOM = require('react-dom');

function Hello() {
  return React.createElement('h1', null, 'Hello World!');
}

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Hello));
