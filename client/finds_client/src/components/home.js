import React from 'react';
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import TopAppBar from './TopAppBar';
import MyDocumentList from './MyDocumentsList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../styles/home.css';

const Home = props => {
    const dispatch = useDispatch();
    const moveToUploadPage = () => {
        return (dispatch(push("/uploadPage")));
    }
    return (
        <div>
            <TopAppBar />
            <MyDocumentList />
            <div className="positionFixed">
                <Fab color="primary" aria-label="add" className="positionFixed" onClick={moveToUploadPage}>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}

export default Home;