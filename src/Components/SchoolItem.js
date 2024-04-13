import React from "react";
import "./SchoolItem.css";
import Button from "@mui/material/Button";
import repImage from "../Images/head.jpeg";
const SchoolItem = ({ school }) => {
  return (
    <div className="schoolBanner">
      <div className="schoolNameAddress">
        <h3>{school.School}</h3>

        <p>
          {school.City}, {school.State}
        </p>
        <h4 className="subheading">{school.SubHeading}</h4>
      </div>
      <div className="right-side">
        <div className="repContactContainer">
          <img
            className="repImage"
            src={repImage}
            alt="sales representative"
          ></img>
          <a
            className="repEmail"
            href="mailto:sales@nemc.com?Subject=Help%20with%20accessory%20purchase"
          >
            Email Your Rep
          </a>

          <Button className="button" variant="contained" href={school.URL}>
            View Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SchoolItem;
