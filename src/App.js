import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import movies from "./movie.json";
import "./App.css";

function App() {
  const [num, setNum] = useState(1);

  function incrementFun() {
    setNum(num+ 1);
  }

  function decrementFun() {
    setNum (num -1)
  }

  return (
    <div className="App">
      <Header />

      {/* <div className="main_wrapper">
        {movies.map((element, index) => {
          return (
            <Main
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div> */}

      <h1 className="heading">{num}</h1>
      <button className="btn" onClick={incrementFun}>
        Increment
      </button>
      <button className="btn" onClick={decrementFun}>Decrements</button>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
