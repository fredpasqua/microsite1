import React from "react";
import SchoolItem from "./SchoolItem";

const SchoolList = ({ data }) => {
  return (
    <div>
      {data.map((school, index) => (
        <SchoolItem key={index} school={school} />
      ))}
    </div>
  );
};

export default SchoolList;
