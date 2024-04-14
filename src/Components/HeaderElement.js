import React from "react";
import "./HeaderElement.css";
import Button from "@mui/material/Button";
import HeaderImage from "../Images/StoreToSchoolPlaceholder.jpg";
function HeaderElement() {
  return (
    <div className="headerContainer">
      <section className="topHeader">
        <section className="section1">
          <img src={HeaderImage} alt="logoplaceholder"></img>
        </section>
        <section className="description">
          <div>
            <ul className="benefits">
              <li>Free Shipping on order of $25 or more</li>
              <li>Teacher Created School Accessory Lists</li>
              <li>Educator Approved Products</li>
              <li>Huge Selection</li>
              <li>Over 60 Years serving school programs</li>
              <li>
                Have questions? <a href="sales@nemc.com">Chat with us now!</a>
              </li>
            </ul>
          </div>
        </section>
      </section>
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
    </div>
  );
}

export default HeaderElement;
