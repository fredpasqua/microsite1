import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import SchoolList from "./Components/SchoolList";
import "./App.css";
import HeaderElement from "./Components/HeaderElement.js";
function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="App">
      <HeaderElement></HeaderElement>
      <h2 className="searchHeader">Find Your School</h2>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="search"
        />
      </div>
      <div className="searchContainer">
        <SchoolList input={inputText} />
      </div>
    </div>
  );
}

export default App;
