import React from 'react'
import PropTypes from 'prop-types';
// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import {
  Box, Grid, Paper, Container, Button
} from '@material-ui/core';
// Custom components
import GamePhase from './GamePhase';
import GameDialog from './GameDialog';
// Material UI Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  }
}))

const Game = ({ loggedUser, word, currentPhase, timeLeft }) => {
  const classes = useStyles();
  
  return (
    <Container className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <GamePhase currentPhase={currentPhase} timeLeft={timeLeft} />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Paper>
              <Box display="flex" justifyContent="flex-end">
                <Box m={1}>
                  <GameDialog username={loggedUser?.username} word={word} />
                </Box>
                <Box m={1}>
                  <Button variant="contained" color="secondary"><ExitToAppIcon style={{ fontSize: 30 }} /></Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

Game.propTypes = {
  loggedUser: PropTypes.object,
  word: PropTypes.string,
  currentPhase: PropTypes.string,
  timeLeft: PropTypes.object
}

const currentTime = new Date().getTime()
const difference = new Date(currentTime + 1*60000) - currentTime;

Game.defaultProps = {
  loggedUser: {
    username: "username_1"
  },
  word: "MIT",
  currentPhase: "Voting",
  timeLeft: {
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default Game;