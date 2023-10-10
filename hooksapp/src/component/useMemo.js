import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ number }) => {
  // This is an expensive calculation that we want to memoize
  const calculateResult = () => {
    console.log('Calculating result...');
    return number * 2;
  };

  // Use useMemo to memoize the result of the calculation
  const result = useMemo(() => calculateResult(), [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Result: {result}</p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>useMemo Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveCalculation number={count} />
    </div>
  );
};

export default App;
