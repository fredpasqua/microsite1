import React from "react";
import SchoolItem from "./SchoolItem";
import data from "../data.json";
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
        el.City.toLowerCase().includes(props.input)
      );
    }
  });
  
  return (
    <div>
      {filteredData.map((school, index) => (
        <SchoolItem key={index} school={school} />
      ))}
    </div>
  );
};

export default SchoolList;
