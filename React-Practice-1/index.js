import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);


  // Event handlers for increment,decrement,square,divide,multiply,modulo by 2, and reset 
  const handleIncrement = () => {
    setCount(count + 1);
    setResult(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setResult(count - 1);
  };

  const handleSquare = () => {
    setCount(count * count);
    setResult(count * count);
  };

  const handleMultiplyByTwo = () => {
    setCount(count * 2);
    setResult(count * 2);
  };

  const handleDivision = () => {
    setCount(count / 2);
    setResult(count / 2);
  };

  const handleReset = () => {
    setCount(0);
    setResult(0);
  };

  const handlePercentage = () => {
    setResult(count % 2);
  };

  return (
    <div className="counter-app">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleMultiplyByTwo}>Multiply By Two</button>
      <button onClick={handleSquare}>Square</button>
      <button onClick={handleDivision}>Division</button>
      <button onClick={handleReset}>Reset</button>

      <h2>Result: {result}</h2>
      <button onClick={handlePercentage}>Modulo</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);
