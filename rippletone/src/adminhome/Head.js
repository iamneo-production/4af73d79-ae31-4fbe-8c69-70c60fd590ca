import React from 'react'
import { TextField, Button } from "@material-ui/core";

const Head = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextField variant="outlined" label="Type here to search" style={{width:'50%'}} />
        <Button variant="contained" color="secondary">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Head