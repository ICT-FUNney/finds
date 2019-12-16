import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Avatar} from "@material-ui/core";

import { Switch, Route } from "react-router-dom";
import {push} from "connected-react-router";
import {useDispatch,useSelector} from "react-redux";
import TopAppBar from './TopAppBar';
import logo from "../logo.svg";
import arrow from "../arrow_right_alt-24px.svg";
import Detail from "./Detail";

// TODO:コードが汚くなってきたので整理する

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
        transform: "translateY(-50%)"
    },
    image:{
        width:"80vw",
        height:"70%",
        maxWidth:"700px",
        maxHeight:"700px"
    },
    comment:{
        backgroundColor:"white",
        margin:0,
        width:"100%",
        marginBottom:"100px"
    },
    commentUser:{
        display:"flex",
    },
    commentContent:{
        backgroundColor: "#E4E4E4",
        borderRadius:"20px",
        padding:"10px",
        marginBottom:"20px",
        marginLeft:"15px",
        marginRight:"15px"
    },
    description:{
        backgroundColor:"#E4E4E4",
        minHeight:"100px"
    },
    paymentFooterFunney:{
        display:"flex",
        justifyContent:"center",
        position:"relative",
        top:"30px"
    },
    paymentFooterImage:{
        height:"30px",
        width:"25%"
    },
    paymentFooterButton:{
        position:"absolute",
        bottom:"10%",
        left:"50%",
        transform:"translateX(-50%)"
    },
    afterPayment:{
        position:"absolute",
        width:"80%",
        height:"50%",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    afterPaymentText:{
        textAlign:"center",
        marginBottom:"30%",
        marginTop:"20%"
    },
    afterPaymentButton:{
        maxWidth:"50%",
        left:"50%",
        transform:"translateX(-50%)"
    }
});

const ddata =
{
    "documentId": 1,
    "name": "線形代数学第1回講義ノート",
    "author": "未来太郎",
    "authorLevel": 2,
    "thumbnail": "https://i.pinimg.com/474x/af/68/64/af68643ebb19a24a060a4742dac53a6d.jpg",
    "material": "https://www.cube-soft.jp/cubepdf/CubePDF_users_manual.pdf",
    "price": 50,
    "downlaod": 33,
    "likes": 3,
    "description": "線形代数学第1回講義ノートです",
    "reviews": 3,
    "content": [
        {
            "userId": "b1019001",
            "userIcon": "",
            "text": "わかりやすかったです"
        },
        {
            "userId": "b1019003",
            "userIcon": "",
            "text": "参考になりました"
        }
    ]
}

const com = [
    {
        userId: "b1019001",
        userIcon: "",
        text: "わかりやすかったです"
    },
    {
        userId: "b1019003",
        userIcon: "",
        text: "参考になりました"
    }
]

const Description=({description})=>{
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h6">資料の説明</Typography>
            <div>
                <Typography variant="subtitle2" className={classes.description} >{description}</Typography>
            </div>
        </div>
    );
}

const Comments=({comments})=>{
    const classes = useStyles();
    return (
        <div className={classes.comment}>
            <Typography variant="subtitle1">レビュー</Typography>
            {comments.map((item,index)=>{
                return (
                    <div key={index} className={classes.commentContent}>
                        {/* TODO:Avatarの表示位置を変える */}
                        <div className={classes.commentUser}>
                            <Avatar src={item.userIcon} alt="user"/>
                            <Typography variant="subtitle1" style={{marginLeft:"5px",marginTop:"5px"}}>{item.userId}</Typography>
                        </div>
                        <Typography variant="subtitle2">{item.text}</Typography>
                    </div>
                );
            })}
        </div>
    );
}

const Footer=({onClick})=>{
    const classes = useStyles();
    return (
        <div className={classes.foot}>
            <Typography variant="h4">100FUNney</Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.footButton}
                onClick={onClick}
            >
                購入する
                </Button>
        </div>
    );
}

const PaymentFooter=()=>{
    const classes = useStyles();
    return (
        <div className={classes.paymentFooterFunney}>
            <div>
                <Typography variant="subtitle2">購入前</Typography>
                <Typography variant="h5">100FUNney</Typography>
            </div>
            <img src={arrow} alt="" className={classes.paymentFooterImage} />
            <div>
                <Typography variant="subtitle2">購入後</Typography>
                <Typography variant="h5">50FUNney</Typography>
            </div>
        </div>
    );
}

const DocumentDetailPage=({match})=>{
    const classes = useStyles();
    const dispatch=useDispatch();
    const {target}=useSelector(store=>store.selectDoc);
    const moveToPayment=()=>{
        return (
            dispatch(push("/detail/payment"))
        );
    }
    const moveToAfter=()=>{
        return (
            dispatch(push("/detail/afterpayment"))
        );
    }

    return (
        <>
            < TopAppBar />
            <Switch>
                <Route exact path={`${match.url}`} render={()=>{
                    return (
                        <>
                            <div style={{ textAlign: "center" }}>
                                <img src={target.thumbnail} alt="hoge" className={classes.image} />
                            </div>
                            <Detail name={target.name} creator={target.creator}
                                creatorLevel={target.creatorLevel} creatorImg={target.creatorImg}
                                likes={target.likes} reviews={target.reviews}
                                dl={target.dl}
                            />
                            <Description description={target.description}/>
                            <Comments comments={target.comments}/>
                            <Footer  onClick={moveToPayment}/>
                        </>
                    );
                }}/>
                <Route exact path={`${match.url}/payment`} render={()=>{
                    return (
                        <>
                            <div style={{ textAlign: "center" }}>
                                <img src={target.thumbnail} alt="hoge" className={classes.image} />
                            </div>
                            <Detail userfuneny="100"
                                name={target.name} creator={target.creator}
                                creatorLevel={target.creatorLevel} creatorImg={target.creatorImg}
                                likes={target.likes} reviews={target.reviews}
                                dl={target.dl}
                            />
                            <PaymentFooter/>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={moveToAfter}
                                className={classes.paymentFooterButton}
                            >
                                購入確定
                            </Button>
                        </>
                    );
                }} />
                <Route exact path={`${match.url}/afterpayment`} render={()=>{
                    return (
                        <div className={classes.afterPayment}>
                            <Typography variant="h6" className={classes.afterPaymentText}>購入が完了しました。</Typography>
                            <Button color="primary" variant="contained" className={classes.afterPaymentButton}>資料を見る</Button>
                        </div>
                    );
                }}
                />
            </Switch>
        </>
    )
}

export default DocumentDetailPage;
