import "./App.css";
import React from "react";

export default function App() {
  const [count,setCount] = React.useState(0);
  fetch(`https://slides-app-220822.herokuapp.com/slides`)
    .then((res) => res.json())
    .then((res) =>  localStorage.setItem("item",JSON.stringify(res[count])))
   
    const data = JSON.parse(localStorage.getItem('item'));
  
return (
  <div className="App">
    <h1 data-cy="header">Slides</h1>
    <div className="slide-container" data-cy="slide">
      <h3 data-cy="title">{data.title}</h3>
      <p data-cy="description">{data.description}</p>
    </div>
    <button className="btn" data-cy="prev" disabled={count === 0} onClick={() => setCount(count-1)}>⬅ Previous </button>
    <button className="btn2" data-cy="next" disabled={count === 4} onClick={() => setCount(count+1)}>Next ➡</button>
  </div>
)
}
