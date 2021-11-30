import React, { useState, useEffect } from 'react';

function StarWarsBlock() {
  let [stateSW, setStateSW] = useState({
    items: []
  });

  let [count, setCount] = useState({ isPers: false });

  async function getPersSW() {
    const response = await fetch('https://swapi.dev/api/people');
    const pars = await response.json();
    setStateSW({
      items: pars.results
    });
  }
  async function getPlanetSW() {
    const response = await fetch('https://swapi.dev/api/planets');
    const pars = await response.json();
    setStateSW({
      items: pars.results
    });
  }

  function toggleStateIsPeople() {
    setCount({ isPers: true });
  }

  useEffect(() => getPlanetSW(), []);
  useEffect(() => {
    if (count.isPers) {
      getPersSW();
    }
  }, [count.isPers]);
  return (
    <div>
      <ul>
        <h3>we use the methods of the function component lifecycle</h3>
        {stateSW.items.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <button onClick={toggleStateIsPeople}>Get planet</button>
    </div>
  );
}

export default StarWarsBlock;
