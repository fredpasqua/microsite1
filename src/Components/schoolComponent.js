import "./schoolComponent.css";
import { useState } from "react";
function SchoolComponent(users) {
  let getUsers = () => {
  users != null ? 
 let data = users : null;}

 getUsers();
  return (
    <div className="App">
      <div className="schoolComponent">
        <ul>
          {data.map((user) => (
            <li key={data.id}>
              <h2>
                {data.firstName} {dat.lastName}
              </h2>
           
            </li>
          ))}
        </ul>
        <div className="infoBox">Another Div</div>
        <div className="infoBox">Another Div</div>
        <div className="infoBox">Another Div</div>
      </div>
    </div>
  );
}

export default SchoolComponent;
