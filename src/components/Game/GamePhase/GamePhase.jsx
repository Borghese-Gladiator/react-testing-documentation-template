import React from 'react';
import PropTypes from 'prop-types';
// Material UI Components
import { Paper, Typography, Box } from '@material-ui/core';

const GamePhase = ({ currentPhase, timeLeft }) => {
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === null) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Paper>
      <Box p={1}>
        <Typography variant="h6">PHASE</Typography>
        <Typography variant="h3" style={{ color: "green" }}>{currentPhase}</Typography>
        <Typography variant="body1">Time Left: {timerComponents.length ? timerComponents : <span>Time's up!</span>}</Typography>
      </Box>
    </Paper>
  )
}

GamePhase.propTypes = {
  currentPhase: PropTypes.string,
  timeLeft: PropTypes.object
}

const currentTime = new Date().getTime()
const difference = new Date(currentTime + 1*60000) - currentTime;

GamePhase.defaultProps = {
  currentPhase: "Voting",
  timeLeft: {
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default GamePhase;