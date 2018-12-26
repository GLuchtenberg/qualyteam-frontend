import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.png'

const styles = theme =>({
  root: {
    // flexGrow: 1,
  },
  grow: {
    marginTop: theme.spacing.unit *2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function ButtonAppBar (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link to={'/document'}>
              <img src={logo} alt="logo"/>
          </Link>
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);