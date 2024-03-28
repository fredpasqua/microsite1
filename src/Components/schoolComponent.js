import "./schoolComponent.css";

function SchoolComponent() {
  return (
    <div className="App">
      <div className="schoolComponent">
        <ul>
          {props.map((user) => (
            <li key={user.id}></li>
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
