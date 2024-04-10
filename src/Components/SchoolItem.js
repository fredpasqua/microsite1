import React from "react";

const SchoolItem = ({ school }) => {
  return (
    <div>
      <h3>{school.School}</h3>
      <h4>{school.SubHeading}</h4>
      <p>
        {school.City}, {school.State}
      </p>
      <p>
        <a href={school.URL} target="_blank" rel="noopener noreferrer">
          View Page
        </a>
      </p>
    </div>
  );
};

export default SchoolItem;
