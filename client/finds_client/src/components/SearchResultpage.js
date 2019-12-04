import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {push} from "connected-react-router";
import {useDispatch,useSelector} from "react-redux";
import TopAppBar from './TopAppBar';

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

function SearchResultPage(props) {
  const classes = props;
  const dispatch = useDispatch();
  const {searchResult}=useSelector(state=>state.search);
  const moveToDocumentDetail = () => {
  return (dispatch(push("/detail")));
  }
  return (
    <div className={classes.root}>
      < TopAppBar />
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }} >
        </GridListTile>
        {searchResult.map(item => (
          <GridListTile key={item.documentId}>
            <img src={item.thumbnail} alt={item.name} onClick={moveToDocumentDetail}/>
            <GridListTileBar
              title={item.name}
              subtitle={<span>作成者: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.name}`} className={classes.icon}onClick={moveToDocumentDetail}>
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

SearchResultPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultPage);