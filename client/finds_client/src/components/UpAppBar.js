import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Description from '@material-ui/icons/Description';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    searchIcon: {
      position: "absolute",
      left: "85%",
      bottom: "0%",
      color:"#000000",
  },
    search: {
      position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFFFFF",
    '&:hover': {
      backgroundColor: "#FFFFFF",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
     inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    color: '#000000',
    flexGrow:1,
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
    },

    flex: {
      flexGrow: 1,
      color:"#FFFFFF",
    },

  mypage: {
    color:"#FFFFFF",
    },
});

function UpAppBar(props) {
    const { classes, title, search } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
              placeholder="新しい勉強資料を探す"
              fullWidth="100%"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
                inputProps={{ 'aria-label': 'search' }}
            />
            </div>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {title}
                    </Typography>
            <IconButton className={classes.mypage}>
            <Description/>
            </IconButton>
            <IconButton className={classes.mypage}>
              <AccountCircle />
            </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

UpAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpAppBar);