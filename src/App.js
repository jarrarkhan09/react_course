import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import movies from "./movie.json";
import "./App.css";

function App() {
  let login = true;
  // if (login) {
  //   return <h1>Hello Jarrar </h1>;
  // }

  return (
    <div className="App">
      <Header />

      <div className="main_wrapper">
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
      </div>

      <Footer />
    </div>
  );
}

export default App;
