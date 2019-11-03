import React, { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';

import './App.css';

function App() {
  // const abc = useState(1);
  // typeof abc; // array;
  // abc[0]; // state value itself
  // abc[1]; // state updater for this state

  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    //add obj to counters array
    setCounters(counters => [...counters, 0]);
  };

  const setCount = (counterIndex, value) => {
    const duplicateCounters = [...counters];
    duplicateCounters[counterIndex] += value;
    setCounters(duplicateCounters);
  };

  const setAll = value => {
    const duplicateCounters = [...counters].map(
      counterValue => counterValue + value
    );
    setCounters(duplicateCounters);
  };

  return (
    <div>
      {/* this button will be used to add more counters */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button buttonLabel="Add Counter!" onClick={addCounter} />
        <Button buttonLabel="+1" onClick={() => setAll(1)} />
        <Button buttonLabel="+2" onClick={() => setAll(2)} />
        <Button buttonLabel="+4" onClick={() => setAll(4)} />
      </div>
      {counters.map((counterValue, index) => (
        <Counter
          key={index}
          count={counterValue}
          setCount={value => setCount(index, value)}
        />
      ))}
    </div>
  );
}

export default App;
