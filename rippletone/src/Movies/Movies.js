import React from 'react'
import styled from 'styled-components'
import {Card,CardContent,CardMedia,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
const Movies = ({setmovie}) => {
let database = [
  {
    Title: "Master",
    release: 2021,
    tracks: 5,
    image:"https://i.pinimg.com/originals/b9/3f/0d/b93f0da293f7034f8d15aad569804bfc.jpg",
    songs: [
      { id: 1, name: "Vaathi Comming...", singer: "Anirudh", time: "5:30s" },
      { id: 2, name: "Antha  Kanna...", singer: "Yuvan", time: "4:30s" },
      { id: 3, name: "KuttiStory...", singer: "Vijay Anirudh", time: "5:30s" },
      { id: 4, name: "Beat of Master...", singer: "Anirudh", time: "5:30s" },
    ],
  },
  { Title: "Darbar", release: 2020, tracks: 5,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQklrpA0k93NCdwUvxtjB0HyoSZ7wjD27zi_XR3tH4frrOhAZPI",
  songs: [
    { id: 1, name: "Dhummu Dhooli", singer: "S.P Balasubramanyam", time: "5:30s" },
    { id: 2, name: "Nikharsaina Bramhacharine...", singer: "Inno genga", time: "4:30s" },
    { id: 3, name: "Thalaiva in charge...", singer: "priyamali", time: "5:30s" },
    { id: 4, name: "kallatho tamari", singer: "Chandramukhi muvvala", time: "5:30s" },
  ]
},
  { Title: "96", release: 2009, tracks: 5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-wRyG9nx16tHgw7LAAlha2FBmrcKwIScoiu0MkIbHt4L0rLBtBEl1HKZMVRJtLTfxF5Y&usqp=CAU",
  songs: [
    { id: 1, name: "kadhale kadhale", singer: "chinmayi sripada ", time: "5:30s" },
    { id: 2, name: "Life Of Ram", singer: "Pradeep Kumar", time: "4:30s" },
    { id: 3, name: "Thanbangale", singer: "Pradeep Kumar", time: "5:30s" },
    { id: 4, name: "Anthaati...", singer: "Govindha Vasantha", time: "5:30s" },
  ]
},
  { Title: "Hero", release: 2018, tracks: 5,image:"https://upload.wikimedia.org/wikipedia/en/b/bb/Hero_film_poster.jpg",
  songs: [
    { id: 1, name: "Hero Title Track...", singer: "Yuvan", time: "5:30s" },
    { id: 2, name: "Aayiram Mungagal", singer: "Ilayaraja", time: "4:30s" },
    { id: 3, name: "Malto Kitapuleh...", singer: "Shyam Vishwanathan", time: "5:30s" },
    { id: 4, name: "Overa Feel Pannuren...", singer: "Yuvan", time: "5:30s" },
  ]
}
]
  return (
    <Container>
      {database.map((e) => (
        <Card   component={Link}  to='/Tracks' style={{padding:'.5rem', textDecoration:'none',cursor:'pointer' 
        }}
   onClick={()=>{ console.log(e) ;setmovie(e)}}
        >
          {/* e.Title Img in Card Media */}
          <CardMedia
           component="img"
          height="200"
          image={e.image}
          alt="green iguana"/>
          <CardContent>
            <Typography variant="h5"> {e.Title} </Typography>

            <Typography variant="body">{e.release} </Typography>
            <Typography variant="body2">{e.tracks} </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Movies
let Container=styled.div`
border:2px solid red;
padding:3rem;
display:flex;
justify-content: space-between;
align-items:center;
`