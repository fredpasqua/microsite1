import React from "react";

import SchoolList from "./Components/SchoolList";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Schools and Band Accessories</h1>
        <SchoolList data={data.data} />
      </header>
    </div>
  );
}

export default App;
