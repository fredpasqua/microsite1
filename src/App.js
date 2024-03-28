import "./App.css";
import { useEffect, useState } from "react";
import SchoolComponent from "./Components/schoolComponent";
function App() {
  const [data, setData] = useState();
  var fetchData = () => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <section className="header">
          NEMC School Microsites Directory{" "}
          <a href="https://www.shopnemc.com">shopnemc</a>
        </section>
        <SchoolComponent data={data}></SchoolComponent>
      </header>
    </div>
  );
}

export default App;
