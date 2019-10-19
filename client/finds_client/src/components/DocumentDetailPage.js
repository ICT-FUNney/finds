import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import { Switch, Route } from "react-router-dom";

import logo from "../logo.svg";
import Detail from "./Detail";

const useStyles = makeStyles({
    foot:{
        position:"fixed",
        width: "100%",
        bottom:"0px",
        height:"80px",
        backgroundColor:"#2E2E2E",
        color:"#fff",
    },
    footButton:{
        position: "absolute",
        right :"10%",
        top:"50%",
        transform:"translateY(-50%)"
    },
    image:{
        width:"80vw",
        height:"70%",
        maxWidth:"700px",
        maxHeight:"700px"
    }
});

const DocumentDetailPage=({match})=>{
    const classes = useStyles();
    function footer(){
        return (
            <div className={classes.foot}>
                <Typography variant="h4">100FUNney</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.footButton}
                >
                    購入する
                    </Button>
            </div>
        );
    }
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <img src={logo} alt="hoge" className={classes.image}/>
            </div>
            <Detail name="aaa"/>
            <Switch>
                <Route exact path={`${match.url}`} component={footer}/>
                <Route exact path={`${match.url}/payment`} />
            </Switch>
        </div>
    )
}

export default DocumentDetailPage;