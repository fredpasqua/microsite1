import React from "react";
import data from "./schoolLandingDataSet.json";
export default function schoolComponent2() {
  if (!data) {
    return <div>Loading schools...</div>;
  } else {
    return (
      <div>
        <h2>Schools List</h2>
        <ul>
          {data.schools.map => (
            <li key={index}>
              <div className="schoolComponent">
                <div className="infoBox">
                  {user.firstName} {user.lastName}
                </div>
                <div className="infoBox">{user.email}</div>
                <div className="infoBox"> {user.id}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
