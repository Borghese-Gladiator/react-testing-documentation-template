import React, { useState } from 'react';
import PropTypes from "prop-types";
// Material UI components
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Typography, Grid, Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10)
  },
  content: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  roomLinkText: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      textAlign: 'center'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Lobby = ({ roomURL, players }) => {
  const classes = useStyles();
  const [isShowingLink, setIsShowingLink] = useState(false);
  const [isShowingAlert, setIsShowingAlert] = useState(false);

  const handleClick = () => {
    // https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
    navigator.clipboard.writeText(roomURL);
    setIsShowingAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsShowingAlert(false);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container
          onMouseEnter={() => setIsShowingLink(true)}
          onMouseLeave={() => setIsShowingLink(false)}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid item xs={10}>
            <Paper>
              <Typography variant="body1" className={classes.roomLinkText}>
                {
                  isShowingLink
                    ? JSON.stringify(roomURL, null, 2)
                    : "Hover over me to see the invite link"
                }
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Button color="secondary" variant="contained" style={{ width: "95%" }} onClick={handleClick}>Copy</Button>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={isShowingAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          URL copied to clipboard! Invite your friends
          <br />
          {roomURL}
        </Alert>
      </Snackbar>
    </div>
  )
}

Lobby.propTypes = {
  roomURL: PropTypes.string,
  players: PropTypes.array
}

const roomID = 'abc123'; // temp constant - should retrieve this from server
const roomURL = process.env.REACT_APP_NODE_ENV === "production" ? "https://" + window.location.hostname + `/game/${roomID}` : `http://127.0.0.1:3000/game/${roomID}`;

Lobby.defaultProps = {
  roomURL: roomURL,
  players: [
    { id: "1", name: "toddyyear-round" },
    { id: "2", name: "toddyyear-round" },
    { id: "3", name: "toddyyear-round" },
    { id: "4", name: "toddyyear-round" },
  ]
}

export default Lobby;