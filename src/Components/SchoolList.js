import React from "react";
import SchoolItem from "./SchoolItem";
import data from "../data.json";
import { Button } from "@mui/material";
//function for alphabetize
function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 : a > b ? 1 : 0;
}

//alphabetize the list by City then by School Name

data.sort(function (a, b) {
  return compareStrings(a.Name, b.Name);
});
data.sort(function (a, b) {
  return compareStrings(a.City, b.City);
});

const SchoolList = (props) => {
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
    //if no input then return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input in Name or City
    else {
      return (
        el.Name.toLowerCase().includes(props.input) ||
        el.City.toLowerCase().includes(props.input) ||
        el.SubHeading.toLowerCase().includes(props.input)
      );
    }
  });

  return filteredData.length >= 1 ? (
    <div>
      {filteredData.map((school, index) => (
        <SchoolItem key={index} school={school} />
      ))}
    </div>
  ) : (
    <>
      {" "}
      <div className="placeholder">No schools match your search</div>
      <section className="categoryLinks">
        <div>
          <h2 className="linkHeading">Shop By Category</h2>
        </div>
        <div className="button-container">
          <div className="button-container-one">
            <Button variant="contained" href={"#"} className="button">
              Elementary Band
            </Button>{" "}
            <Button variant="contained" href={"#"} className="button">
              Middle School Band
            </Button>{" "}
            <Button variant="contained" href={"#"} className="button">
              High School Band
            </Button>{" "}
            <Button variant="contained" href={"#"} className="button">
              Elementary Orch.
            </Button>{" "}
          </div>
          <div className="button-container-two">
            <Button variant="contained" href={"#"} className="button">
              MS Orchestra
            </Button>{" "}
            <Button variant="contained" href={"#"} className="button">
              HS Orchestra
            </Button>{" "}
            <Button variant="contained" href={"#"} className="button">
              Jazz Band
            </Button>
            <Button variant="contained" href={"#"} className="button">
              Marching Band
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchoolList;
