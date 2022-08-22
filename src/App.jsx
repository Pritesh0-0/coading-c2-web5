import Slide from "./Components/Slide";
import "./App.css";
import React from "react";
import Data from "./Components/data";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {
  // const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  // useEffect - making network request;
  // React - UI library - frontend;

  React.useEffect(() => {
    fetchAndUpdateData();
  }, []);

  const fetchAndUpdateData = () => {
    fetch(`https://slides-app-220822.herokuapp.com/slides`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((_err) => setError(true))
      
  };

  const displayData = data.map((data) => (
    <div>
      <Slide key={data.id} title={data.title} desc={data.description} id= {data.id} />
    </div>
  ));
  return (
    <div className="App">
      <h1 data-cy="header">Slides blah</h1>
      {displayData}
      <button data-cy="prev" >Prev</button>
      <button data-cy="next">Next</button>
    </div>
  );
}