// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>pls no judge i is learning</h2>
      <h3>my name is hans </h3>
      <h4>i is curtin uni student </h4>
      <h5>i is 22 years old in the making of this webpage</h5>
      <h6>idk what to write so this is the end ok goodbye</h6>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
