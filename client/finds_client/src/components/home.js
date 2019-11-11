import React from 'react';
import UpAppBar from './UpAppBar';
import MyDocumentList from './MyDocumentsList';


const Home = props => {
    return (
        <div>
            <UpAppBar />
            <MyDocumentList/>
        </div>
    )
}

export default Home;