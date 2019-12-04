import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {useSelector,useDispatch} from "react-redux";
import {getUserDocRequest} from "../actions/actionTypes"


const styles = theme => ({
  root: {
    width:'0%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '30%',
    height: '50%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

 function MyDocumentList(props) {
   const classes = props;
   const {userDoc}=useSelector(state=>state.userDoc);
   const dispatch=useDispatch()
   useEffect(()=>{
     dispatch(getUserDocRequest("b1018000"))
   },[])

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
        </GridListTile>
        {userDoc.map(item => (
          <GridListTile key={item.documentId}>
            <img src={item.thumbnail} alt={item.name} />
            <GridListTileBar
              title={item.name}
              subtitle={<span>作成者: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

MyDocumentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyDocumentList);