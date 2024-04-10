import React from "react";
import "./SchoolItem.css";
const SchoolItem = ({ school }) => {
  return (
    <div className="schoolBanner">
      <div className="schoolNameAddress">
        <h3>{school.School}</h3>

        <p>
          {school.City}, {school.State}
        </p>
      </div>
      <div className="right-side">
        <h4 className="subheading">{school.SubHeading}</h4>
        <p>
          <a
            href={school.URL}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Page
          </a>
        </p>
      </div>
    </div>
  );
};

export default SchoolItem;
