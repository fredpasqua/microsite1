import React from "react";
import "./HeaderElement.css";
import Button from "@mui/material/Button";
function HeaderElement() {
  return (
    <div className="headerContainer">
      <section className="section1">1</section>
      <section className="categoryLinks">
        <div>
          <h2 className="linkHeading">Shop By Category</h2>
        </div>
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
          Elementary Strings
        </Button>{" "}
        <Button variant="contained" href={"#"} className="button">
          Middle School Strings
        </Button>{" "}
        <Button variant="contained" href={"#"} className="button">
          High School Strings
        </Button>{" "}
        <Button variant="contained" href={"#"} className="button">
          Jazz Band
        </Button>
        <Button variant="contained" href={"#"} className="button">
          Marching Band
        </Button>
      </section>
    </div>
  );
}

export default HeaderElement;
