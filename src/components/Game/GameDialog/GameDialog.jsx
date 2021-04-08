import React from 'react';
import PropTypes from 'prop-types';
// Material UI Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// Material UI Icons
import InfoIcon from '@material-ui/icons/Info';

const GameDialog = ({ username, word }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        <span>INFO <InfoIcon style={{fontSize: 30}} /></span>
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <Typography variant="h6">You are</Typography>
              <Typography variant="h4">{username}</Typography>
              <Typography variant="h6">Your word</Typography>
              <Typography variant="h3">{word}</Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

GameDialog.propTypes = {
  username: PropTypes.string,
  word: PropTypes.string
}

GameDialog.defaultProps = {
  username: "Username_123",
  word: "MIT"
}

export default GameDialog;