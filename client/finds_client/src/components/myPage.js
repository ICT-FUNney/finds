import React from 'react';
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
import { useDispatch } from "react-redux";
import TopAppBar from './TopAppBar';
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

const Login = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
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
                    <i class="material-icons large-size">account_circle</i><br />
                    <Typography className="text_inner">
                        <span className="studentNumber">b101XXXX<br /></span>
                        <span className="funneyRest">㝮㝓り<br /></span>
                        <span className="funneyNumber">100</span>
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
export default withRouter(Login)