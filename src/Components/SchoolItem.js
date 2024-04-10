import React from "react";

const SchoolItem = ({ school }) => {
  return (
    <div>
      <h3>{school.Name}</h3>
      <p>
        {school.City}, {school.State}
      </p>
      <p>
        <a href={school.URL} target="_blank" rel="noopener noreferrer">
          Visit Page
        </a>
      </p>
    </div>
  );
};

export default SchoolItem;
