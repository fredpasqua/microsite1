import React from "react";
import data from "./data.json";
import SchoolList from "./Components/SchoolList";

function App() {
  // const data = data

  return (
    <div className="App">
      <header className="App-header">
        <h1>Schools and Band Accessories</h1>
        <SchoolList data={data} />
      </header>
    </div>
  );
}

export default App;
