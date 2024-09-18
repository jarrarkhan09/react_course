import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Student from "./Student";
import "./App.css";

function App() {
  // const name = "Jarrar khan";
  // let age = 22;

  return (
    <div className="App">
      <Header />
      <Student name="Jarrar Khan" age={22} />
      <p style={{ color: "skyblue" }}>
        This is a portfolio website Lorem ipsum dolor sit amet, consectetur
        adipisicing e molestiae ut neque officia. Et autem placeat accusamus.
        Excepturi temp, modi cupiditate nesciunt, consequuntur minima
        numquam dissimos veniam, animi labore nostrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed
        cupiditate, earum enim quod maiores consequatur rerum veritatis
        aspernatur, ipsam quis harum esse voluptates excepturi, voluptatibus
        placeat reiciendis ea quam. Eum quasi magni aliquid ratione, repudiandae
        consequuntur. Quo porro voluptates reiciendis vitae nesciunt possimus
        facere labore commodi, laudantium eum dolor?
      </p>
      <Footer />
    </div>
  );
}

export default App;
