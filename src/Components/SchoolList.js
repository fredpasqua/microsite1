import React from "react";
import SchoolItem from "./SchoolItem";
import data from "../data.json";
const SchoolList = (props) => {
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
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
