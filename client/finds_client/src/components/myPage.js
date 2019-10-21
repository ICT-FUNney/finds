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
    return (
        <div className="inner">
            <ColorBox color="text.primary" borderRadius="20%" className="box">
                <i class="material-icons large-size">account_circle</i>
                <Typography>b101XXXX</Typography>
                <Typography>
                    <Typography>のこり</Typography>
                    <span className="funneyNumber">100</span>
                    <span className="funnyUnit">FUNney</span>
                </Typography>
            </ColorBox>
            <ColorButton
                variant="contained"
                color="primary"
                className={classes.margin5}
            >
                LOGOUT
            </ColorButton>
        </div >
    )
}
export default withRouter(Login)