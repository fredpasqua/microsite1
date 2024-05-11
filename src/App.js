import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SchoolPage from './SchoolPage'; // Assuming SchoolPage component is in a separate file
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
    <Router>
      <div className="App">
        <Switch>
          <HeaderElement></HeaderElement>
          <div className="searchBox">
            <h2 className="searchHeader">Find Accessories by School</h2>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
