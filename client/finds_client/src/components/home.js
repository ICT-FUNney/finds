import React from 'react';
import TopAppBar from './TopAppBar';
import MyDocumentList from './MyDocumentsList';


const Home = props => {
    return (
        <div>
            <TopAppBar />
            <MyDocumentList/>
        </div>
    )
}

export default Home;