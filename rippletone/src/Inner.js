import { TextField, Typography ,Button} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const Inner = ({email,name,mobile,password,setname,setemail,setmobile,setpassword}) => {

  return (
    <div>
      <Box>
        <Typography variant="h6">Edit details</Typography>

        <TextField
          variant="outlined"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          style={{ width: "100%", margin: ".5rem" }}
        />
        <TextField
          variant="outlined"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          style={{ width: "100%", margin: ".5rem" }}
        />
        <TextField
          variant="outlined"
          placeholder="Enter mobile"
          value={mobile}
          onChange={(e) => {
            setmobile(e.target.value);
          }}
          style={{ width: "100%", margin: ".5rem" }}
        />
        <TextField
          variant="outlined"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          style={{ width: "100%", margin: ".5rem" }}
        />
        <Button size="large" variant="contained" color="primary">
          Update
        </Button>
      </Box>
    </div>
  );
}

export default Inner
let Box=styled.div`
border:2px solid red;
padding:.6rem;
display: grid;
place-items:center;
;
`