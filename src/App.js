import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  const name = "Jarrar khan";
  let age = 22;
  let asleep = "asleep";

  return (
    <>
      <Header />
      <h1>{name}</h1>
      <h2>({age})</h2>
      <h3>{asleep}</h3>
      <p>
        This is a portfolio website Lorem ipsum dolor sit amet, consectetur
        adipisicing e molestiae ut neque officia. Et autem placeat accusamus.
        Excepturi temporibus, modi cupiditate nesciunt, consequuntur minima
        numquam dignissimos veniam, animi labore nostrum.
      </p>
      <Footer />
    </>
  );
}

export default App;
