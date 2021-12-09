import React, { useState, useEffect } from "react";

type MyStateArrrayPers = {
  items?: string[];
};

type MyState = {
  isPers?: boolean;
};

function StarWarsBlock() {
  let [stateSW, setStateSW] = useState<MyStateArrrayPers>({
    items: [],
  });

  let [count, setCount] = React.useState<MyState>({ isPers: false });

  function getPersSW(): void {
    fetch("https://swapi.dev/api/people")
      .then((data) => data.json())
      .then((data) =>
        setStateSW({
          items: data.results,
        })
      );
  }

  function getPlanetSW(): void {
    fetch("https://swapi.dev/api/planets")
      .then((data) => data.json())
      .then((data) =>
        setStateSW({
          items: data.results,
        })
      );
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
        {stateSW.items!.map((item: any) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <button onClick={toggleStateIsPeople}>Get pers from SW</button>
    </div>
  );
}

export default StarWarsBlock;
