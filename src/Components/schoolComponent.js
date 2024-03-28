import "./schoolComponent.css";

import React from "react";

const SchoolComponent = ({ data }) => {
  if (!data || !data.users) {
    return <div>Loading schools...</div>;
  }

  return (
    <div>
      <h2>Schools List</h2>
      <ul>
        {data.users.map((user, index) => (
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
};

export default SchoolComponent;
