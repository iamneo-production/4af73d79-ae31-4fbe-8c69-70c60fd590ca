import { Typography,Grid } from '@material-ui/core'
import React from 'react'
import  styled from 'styled-components'
import InnerBox from './InnerBox'
import Inner from './Inner'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Head from './Head'
import { useState } from 'react'
const Home = () => {
    let [email,setemail]=useState();
    let [name,setname]=useState();
    let [Update,setUpdate]=useState(0);
let path=(window.location.pathname);

  return (
    <div style={{  margin:'.3rem' }}>
      <Navbar>
        <Typography variant="h5" color='textSecondary'>RippleTone</Typography>

        <div
          style={{
            display: "flex",
          }}
        >
       
  
          <div style={{ margin: ".2rem" }}>
   <Typography variant="h6" className="margin">
              Home
            </Typography>
          </div>
          <div style={{ margin: ".2rem" }}>
            <Typography variant="h6" className="margin">
              Movie
            </Typography>
          </div>
        
          <div style={{ margin: ".2rem" }}>
            <Typography variant="h6" className="margin">
              Logout
            </Typography>
          </div>
        </div>
      </Navbar>
      <div style={{ border: "2px solid red", margin: ".2rem",padding:'.3rem' }}>
        <Head />
      <Grid container spacing={2}>
<Grid item xs={8}>

          <InnerBox setemail={setemail} setname={setname}/>
</Grid>
<Grid item xs={4}>

          <Inner email={email} name={name} setname={setname} setemail={setemail}/>
</Grid>
      </Grid>
      </div>
    </div>
  );
}

export default Home
let Navbar=styled.div`
display:flex;
padding:.3rem;
/* width:100vw; */
justify-content: space-around;
background:green;
`
let Box=styled.div