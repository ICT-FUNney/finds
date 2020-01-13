import React,{useEffect}from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Avatar } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import {push} from "connected-react-router";
import {useDispatch,useSelector} from "react-redux";
import TopAppBar from './TopAppBar';
import logo from "../logo.svg";
import arrow from "../arrow_right_alt-24px.svg";
import Detail from "./Detail";
import { buyDocRequest } from "../actions/actionTypes";
import { getUserInfoRequest } from "../actions/actionTypes";


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
    paymentFooter:{
        display:"block",
        marginBottom:"100px"
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
        left:"50%",
        top:"110px",
        transform:"translateX(-50%)",
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

const Footer=({onClick,Doc_Price})=>{
    const classes = useStyles();
    return (
        <div className={classes.foot}>
            <Typography variant="h4">{Doc_Price}FUNney</Typography>
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

const PaymentFooter=({onClick,User_Funeny,Doc_Price})=>{
    const classes = useStyles();
    return (
        <div className={classes.paymentFooterFunney}>
            <div>
                <Typography variant="subtitle2">購入前</Typography>
                <Typography variant="h5">{User_Funeny}FUNney</Typography>
            </div>
            <img src={arrow} alt="" className={classes.paymentFooterImage} />
            <div>
                <Typography variant="subtitle2">購入後</Typography>
                <Typography variant="h5">{User_Funeny-Doc_Price}FUNney</Typography>
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={onClick}
                className={classes.paymentFooterButton}
            >
                購入確定
            </Button>
        </div>
    );
}

const DocumentDetailPage = ({ match }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {userInfo}=useSelector(state=>state.userInfo);
    const {target}=useSelector(store=>store.selectDoc);
    const User = useSelector(s => s.userLogin);
    useEffect(()=>{
     dispatch(getUserInfoRequest("b1018000"))
   },[])
    const moveToPayment=()=>{
        return (
            dispatch(push("/detail/payment"))
        );
    }
    const moveToAfter=()=>{
        return (
            dispatch(buyDocRequest({
                amount:target.price,
                id:User.id,
                dest_id: target.autherId,
                token:User.token
            }))
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
                            <Footer
                                onClick={moveToPayment}
                                Doc_Price={target.price}
                            />
                        </>
                    );
                }}/>
                <Route exact path={`${match.url}/payment`} render={()=>{
                    return (
                        <>
                            <div style={{ textAlign: "center" }}>
                                <img src={target.thumbnail} alt="hoge" className={classes.image} />
                            </div>
                            <Detail userfuneny={User.balance}
                                name={target.name} creator={target.creator}
                                creatorLevel={target.creatorLevel} creatorImg={target.creatorImg}
                                likes={target.likes} reviews={target.reviews}
                                dl={target.dl}
                            />
                            <PaymentFooter
                                onClick={moveToAfter}
                                User_Funeny={userInfo.balance}
                                Doc_Price={target.price}
                            />
                        </>
                    );
                }} />
                <Route exact path={`${match.url}/afterpayment`} render={()=>{
                    return (
                        <div className={classes.afterPayment}>
                            <Typography variant="h6" className={classes.afterPaymentText}>購入が完了しました。</Typography>
                            <Button color="primary" variant="contained" className={classes.afterPaymentButton} onClick={() => dispatch(push("/home"))}>資料を見る</Button>
                        </div>
                    );
                }}
                />
            </Switch>
        </>
    )
}

export default DocumentDetailPage;
