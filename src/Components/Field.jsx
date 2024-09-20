import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const Field = ({name, email}) => {
  return (
    <div>
      <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Button variant = "contained" color="success"> <DeleteIcon></DeleteIcon></Button>
      </div>
    </div>
  );
};

export default Field;
