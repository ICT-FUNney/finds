import React from 'react';
import TopAppBar from './TopAppBar';
import MyDocumentList from './MyDocumentsList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../styles/home.css';

const Home = props => {
    return (
        <div className="positionStandard">
            <TopAppBar />
            <MyDocumentList />
            <Fab className="positionAbsolute" color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}

export default Home;