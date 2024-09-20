import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import movies from "./movie.json";
import Field from "./components/Field";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";


import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

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

      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button variant="contained" color="error" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>email</h4>
          <h4>Remove</h4>
        </div>

        {data.map((e, index) => {
          return <Field key={index} name={e.name} email={e.email} index={index} />;
        })}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
