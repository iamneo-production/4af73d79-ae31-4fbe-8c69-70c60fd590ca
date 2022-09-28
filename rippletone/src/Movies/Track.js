import { Grid,Card,CardContent,Typography,Slider,Box,IconButton} from '@material-ui/core'
import React ,{useState}from 'react'
import styled,{useTheme}  from 'styled-components'
import Play from "@material-ui/icons/PlayCircleFilledWhite";
import {
  FastForwardRounded,
  PauseRounded,
  PlayArrowRounded
,FastRewindRounded} from "@material-ui/icons";
const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});
const Tracks = ({movie}) => {
let [duration,setduration] =useState(0)// seconds
const [position, setPosition] = useState(0);
const [paused, setPaused] = useState(false);
function formatDuration(value) {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}
const mainIconColor = "#000";


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          {movie.songs.map((e) => (
            <Card style={{ margin: ".4rem" }}>
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body">{e.id}</Typography>
                <Typography variant="body">{e.name}</Typography>{" "}
                <Typography variant="body">{e.singer}</Typography>{" "}
                <Typography variant="body">{e.time}</Typography>
                <IconButton>
                  <Play onClick={() => {

                    setduration(e.time[0]*60+30)
                  }} />
                </IconButton>
              </CardContent>
            </Card>
          ))}

          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
             
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Movie>
            <Card>
              <CardContent>
                <Typography variant="h5">{movie.Title}</Typography>
                <Typography variant="h5">{movie.Title}</Typography>
              </CardContent>
            </Card>
          </Movie>
        </Grid>
      </Grid>
    </div>
  );
}

export default Tracks

let Movie=styled.div`
`