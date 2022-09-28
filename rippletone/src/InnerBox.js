import React,{useState} from 'react'
import styled from 'styled-components'
import { Divider, Container, Typography,Card, IconButton } from '@material-ui/core'
import { Edit,Delete } from '@material-ui/icons';
const InnerBox = ({setname,setemail}) => {


let [database, setdatabase] = useState([])
fetch("https://8080-cafafbaeabeacdeabfbaffeeeabbfbeab.examlyiopb.examly.io/admin").then((res)=>{
  return res.json()
}).then((data)=>{
  setdatabase(data)
 
})

  return (
    <div>
      <Container>
        <SubContainer>
          <Typography>S.No</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography>Name</Typography>
          <Divider orientation="vertical" flexItem />

          <Typography>Email</Typography>
          <Divider orientation="vertical" flexItem />

          <Typography>Options</Typography>
        </SubContainer>
        <Divider />

        {/* fetching  from data base */}

          {database.map((data,idx) => (
            <Card
              style={{
                width: "100%",
                display: "flex",
                padding: ".5rem",
                alignItems:'center',
                margin: "1rem",
                justifyContent: "space-around",
              }}
            >
              <Typography>{data.userid}</Typography>
              <Typography>{data.username}</Typography>
              <Typography>{data.email}</Typography>
              <div>
                <IconButton>
                  <Edit style={{ cursor: "pointer" }} onClick={(e)=>{

    setname(data.name);
    setemail(data.email);


                  }} />
                </IconButton>
                <IconButton>
                  <Delete style={{ cursor: "pointer" }} onClick={(e) => {
let nonremoved=database.filter((id)=>(
id.Sno!==data.Sno

)

)
     setdatabase(nonremoved)

                  }} />
                </IconButton>
              </div>
            </Card>
          ))}
      </Container>
    </div>
  );
}

export default InnerBox
let SubContainer=styled.div`
display:flex;
margin:3rem;
justify-content: space-between;

`