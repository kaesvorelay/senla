import React, { useState, useEffect } from "react";

type MyStateArrrayPers = {
  name: string;
};

type MyState = {
  isPers: boolean;
};

function StarWarsBlock() {
  let [stateSW, setStateSW] = useState<MyStateArrrayPers[] | any>([]);

  let [count, setCount] = React.useState<MyState>({ isPers: false });

  function getPersSW(): void {
    fetch("https://swapi.dev/api/people")
      .then((data) => data.json())
      .then((data) => data.results)
      .then((data) =>
        setStateSW(
          data.map((item: { name: string }) => ({
            name: item.name,
          }))
        )
      )
      .catch((error) => alert(error.message));
  }

  function getPlanetSW(): void {
    fetch("https://swapi.dev/api/planets")
      .then((data) => data.json())
      .then((data) => data.results)
      .then((data) =>
        setStateSW(
          data.map((item: { name: string }) => ({
            name: item.name,
          }))
        )
      )
      .catch((error) => alert(error.message));
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
        {stateSW.map((item: { name: string }) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <button onClick={toggleStateIsPeople}>Get pers from SW</button>
    </div>
  );
}

export default StarWarsBlock;
