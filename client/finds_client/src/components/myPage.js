import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import '../styles/myPage.css';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { deepPurple } from '@material-ui/core/colors';
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import TopAppBar from './TopAppBar';
import { getUserInfoRequest } from "../actions/actionTypes";
const darkViolet = deepPurple['A700'];
const brightViolet = deepPurple['100'];

const useStyles = makeStyles(theme => ({
    margin: {
        marginTop: theme.spacing(2),
    },
    margin5: {
        marginTop: theme.spacing(5),
    },
}));

const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(darkViolet),
        backgroundColor: darkViolet,
        '&:hover': {
            backgroundColor: darkViolet,
        },
    },
}))(Button);

const ColorBox = withStyles(theme => ({
    root: {
        backgroundColor: brightViolet,
    },
}))(Box);

const Mypage = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userInfo);
    useEffect(() => {
        dispatch(getUserInfoRequest("b1018000"))
    }, [])
    const moveToLogin = () => {
        return (dispatch(push("/login")));
    }
    return (
        <div>
            <div>
                < TopAppBar />
            </div>
            <div className="inner">
                <ColorBox color="text.primary" borderRadius="10%" className="box">
                    <img src={userInfo.userIcon || "https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png"} class="material-icons" alt="sdfreghtrjy"></img><br></br>
                    <Typography className="text_inner">
                        <span className="studentNumber">{userInfo.userId}</span>
                        <span className="funneyRest">のこり</span>
                        <span className="funneyNumber">{userInfo.balance}</span>
                        <span className="funneyUnit">FUNney</span>
                    </Typography>
                </ColorBox>
                <ColorButton
                    variant="contained"
                    color="primary"
                    className={classes.margin5}
                    onClick={moveToLogin}
                >
                    LOGOUT
            </ColorButton>
            </div >
        </div>
    )
}
export default withRouter(Mypage)