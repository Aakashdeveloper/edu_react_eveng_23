import { useState } from 'react';

// Custom hook for managing local storage
function useLocalStorage(key, initialValue) {
  // Get the initial value from local storage if it exists
  const storedValue = localStorage.getItem(key);

  // Initialize the state with the stored value or the initial value
  const [value, setValue] = useState(storedValue || initialValue);

  // Update local storage whenever the state changes
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
}

// Usage of the custom hook
function App() {
  // Use the custom hook to manage a "counter" value in local storage
  const [counter, setCounter] = useLocalStorage('counter', 0);

  return (
    <div>
      <h1>Custom Hook Example</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default App;
