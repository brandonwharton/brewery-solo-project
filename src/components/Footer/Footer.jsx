import React from 'react';
import './Footer.css';
// Material-UI components
import Typography from '@material-ui/core/Typography';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer>
      <Typography variant="body2" component="p">
        &copy; Prime Digital Academy
      </Typography>
    </footer>
  )
}

export default Footer;
