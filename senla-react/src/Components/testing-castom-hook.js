import React, { useEffect, useState, useCallback } from 'react';
import useChild from './castom-hook';

function Block() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const updateOne = () => {
    console.log('I am not memoized' + counter);
  };

  const updateTwo = useCallback(() => {
    console.log('I am memoized' + counterTwo);
  }, [counter]);

  useChild({ updateOne, updateTwo });

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <h1>Custom counter</h1>
      <p>look at the console!!!</p>
      <br />
      <button onClick={() => setCounter(counter + 1)}>One</button>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>Two</button>
    </div>
  );
}

export default Block;
