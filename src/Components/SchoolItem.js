import React from "react";
import "./SchoolItem.css";
import Button from "@mui/material/Button";
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
          <Button className="button" variant="contained" href={school.URL}>
            View Page
          </Button>
        </p>
      </div>
    </div>
  );
};

export default SchoolItem;
