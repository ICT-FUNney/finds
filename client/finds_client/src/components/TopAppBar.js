import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Description from '@material-ui/icons/Description';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import {push} from "connected-react-router";
import {useDispatch} from "react-redux";
import {getSearchRequest} from "../actions/actionTypes"

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



function TopAppBar(props) {
  const { classes, title, search } = props;
  const dispatch = useDispatch();
  const [searchStr,setSearchStr]=useState('');
  const moveToMypage = () => {
  return (dispatch(push("/myPage")));
  }
  const moveToHome = () => {
    return (dispatch(push("/Home")));
  }
  const moveToResult = () => {
    dispatch(getSearchRequest(searchStr));
  }

  const handleStr=(e)=>{
    setSearchStr(e.target.value);
  }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon} onClick={moveToResult}>
                <SearchIcon />
            </div>
            <Input type='text'
            placeholder='新しい勉強資料を探す'
            value={searchStr}
            onChange={handleStr}
            onKeyPress={(e) => { if (e.which === 13) moveToResult() }}
            />
            </div>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {title}
                    </Typography>
            <IconButton className={classes.mypage}onClick={moveToHome}>
            <Description/>
            </IconButton>
            <IconButton className={classes.mypage} onClick={moveToMypage}>
              <AccountCircle />
            </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

TopAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBar);