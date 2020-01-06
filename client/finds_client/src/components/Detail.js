import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Fab,Avatar,Grid} from "@material-ui/core";

import review from "../chat_bubble_outline-24px.svg";
import like from "../favorite_border-24px.svg";

const useStyles = makeStyles(theme=>({
    detail:{
        backgroundColor:"#E4E4E4",
        width:"100%",
        display:"grid"
    },
    detailButton:{
        margin: "10px",
        [theme.breakpoints.down('sm')]: {
            fontSize:"0.8em"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1em"
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "1.2em"
        },
    },
    dbuttons:{
        gridColumn:"1/3",
        gridRow:2,
        display:"flex"
    },
    workName:{
        marginTop:"20px",
        marginBottom:0,
        marginLeft:"10px",
        gridColumn:1,
        gridRow:"1"
    },
    creatorDisplay:{
        display:"grid",
        gridColumn:2,
        gridRow:"1/3"
    },
    creatorHeader:{
        gridRow:1,
        gridColumn:"1/4"
    },
    creatorAvator:{
        gridRow:"2/3",
        gridColumn:1
    },
    creatorInfo:{
        gridRow:"2/3",
        gridColumn:"2/4",
        textAlign:"0.6em"
    },
    docDL:{
        gridColumn: "3/4",
        gridRow: 2,
        fontSize: "0.6em",
    },
    funney:{
        gridColumn:"1/4",
        marginLeft: "10px",
    }
}));

const DetailButton=({click,src,alt,text,count})=>{
    const classes = useStyles();
    return (
        <div>
            <Fab
                variant="extended"
                size="small"
                className={classes.detailButton}
                color="primary"
                aria-label="add"
                onClick={click}
            >
                <img src={src} alt={alt}/>
                <span>{text}</span>
            </Fab>
            <span>{count||0}</span>
        </div>
    );
}


const Detail=({name,creator,creatorLevel,creatorImg,userfuneny,likes,reviews,dl})=>{
    const classes=useStyles();
    return (
        <div className={classes.detail}>
            <Typography variant="h5" className={classes.workName}>{name||"Document Name"}</Typography>
            <div className={classes.creatorDisplay}>
                <Avatar src={creatorImg||like} alt={creator} className={classes.creatorAvator}/>
                <Typography variant="subtitle1" className={classes.creatorHeader}>作成者</Typography>
                <div className={classes.creatorInfo}>
                    <Typography variant="subtitle1">{creator||"b101****"}</Typography>
                    <Typography variant="subtitle1">Lv.{creatorLevel||0}</Typography>
                    <Typography className={classes.docDL} variant="subtitle1">ダウンロード数{dl||0}</Typography>
                </div>
            </div>
            <div className={classes.dbuttons}>
                {/* TODO: BUTTONの色を変える */}
                <DetailButton click={()=>alert("clicked!!")} src={like} alt="like" text="いいね" count={likes}/>
                <DetailButton click={() => alert("clicked!!")} src={review} alt="review" text="レビュー" count={reviews} />
            </div>
            {userfuneny&&<Typography variant="h4" className={classes.funney}>{`${userfuneny}FUNney`}</Typography>}
        </div>
    )
}

export default Detail;