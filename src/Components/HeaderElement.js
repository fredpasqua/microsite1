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
              <li>Free Shipping orders over $25</li>
              <li>Teacher Created School Accessory Lists</li>
              <li>Over 60 Years serving school programs</li>
              <li>
                Have questions? <a href="sales@nemc.com">Chat with us now!</a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
}

export default HeaderElement;
