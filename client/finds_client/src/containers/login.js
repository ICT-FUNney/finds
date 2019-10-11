import React from 'react';
import '../styles/login.css';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';

const darkViolet = deepPurple['A700'];

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: darkViolet,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: darkViolet,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: darkViolet,
            },
            '&:hover fieldset': {
                borderColor: darkViolet,
            },
            '&.Mui-focused fieldset': {
                borderColor: darkViolet,
            },
        },
    },
})(TextField);

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

const Login = props => {
    const classes = useStyles();
    return (
        <div className="inner">
            <h1>finds</h1>
            <CssTextField
                className={classes.margin5}
                label="ID"
                variant="outlined"
                id="custom-css-outlined-input"
                fullWidth
                InputLabelProps={{
                    style: {
                    }
                }}
                inputProps={{
                    style: {
                    },
                }}
            />
            <CssTextField
                className={classes.margin}
                label="Password"
                variant="outlined"
                id="custom-css-outlined-input"
                fullWidth
                inputProps={{
                    style: {
                    },
                }}
            />
            <ColorButton variant="contained" color="primary" className={classes.margin5}>
                LOGIN
            </ColorButton>
            <a className="buttonUnderText">パスワードを忘れた場合</a>
        </div >
    )
}
export default Login;