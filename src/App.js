import React, { useState } from "react";
import List from "./List";
import { data } from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => setPeople([]);

  return (
    <main>
      <section className="container">
        <div>{people.length} birthdays today</div>
        <List people={people} />
        <button onClick={clearAll}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
