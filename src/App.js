import { React, useState } from "react";

import TextField from "@mui/material/TextField";
import SchoolList from "./Components/SchoolList";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">School Landing Pages</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <SchoolList input={inputText} />
      </header>
    </div>
  );
}

export default App;
