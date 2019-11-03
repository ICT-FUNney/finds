import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    detail:{
        backgroundColor:"#E4E4E4",
        width:"100%"
    }
});

const Detail=({name,creator,level,funeny,good,review,dl})=>{
    const classes=useStyles();
    return (
        <div className={classes.detail}>
            <Typography variant="h4">{name}</Typography>
        </div>
    )
}

export default Detail;