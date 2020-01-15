import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Box from '@material-ui/core/Box';
import {
    makeStyles,
    withStyles
} from '@material-ui/core/styles';
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import Publish from '@material-ui/icons/Publish';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { deepPurple } from '@material-ui/core/colors';
import '../styles/uploadPage.css';
const darkViolet = deepPurple['A700'];

const useStyles = makeStyles(theme => ({
    upload_icon_margin: {
        display: "block",
        margin: "0 auto"
    },
    upload_icon: {
        color: "black",
        fontSize: "35px",
    },
    upload_input: {
        marginTop: "5px"
    },
    upload_button_bottom: {
        marginTop: "5%"
    }
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

const UploadPage = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const moveToHome = () => {
        return (dispatch(push("/home")));
    }
    return (
        <div className="upload_reset">
            <div className="upload_margin"></div>
            <Box borderRadius="10%" className="upload_box">
                <div className="upload_inner">
                    <IconButton className={classes.upload_icon_margin}>
                        <Publish className={classes.upload_icon} />
                    </IconButton>
                    <p className="upload_icon_bottom">ノートをアップロードする</p>
                </div>
            </Box>
            <div className="upload_input_inner">
                <p className="white_text">ノートとタイトルと説明</p>
                <Box className="sentence_box">
                    <TextField label="ノートタイトル" helperText="（必須、40文字まで）" fullWidth inputProps={{ 'aria-label': 'description' }} className={classes.upload_input} />
                    <TextField label="説明(分野、工夫した点、特徴、注意点など)" helperText="（任意、1000文字まで）" fullWidth inputProps={{ 'aria-label': 'description' }} className={classes.upload_input} />
                </Box>
                <p className="white_text">価格</p>
                <Box className="sentence_box">
                    <Input
                        type="number"
                        fullWidth
                        endAdornment={<InputAdornment position="end">FUNney</InputAdornment>}
                        className="input_number"
                    />
                </Box>
            </div>
            <div className="upload_button_space">
                <div className="upload_button_inner">
                    <ColorButton
                        variant="contained"
                    >
                        投稿する
                    </ColorButton>
                    <ColorButton
                        variant="contained"
                        className={classes.upload_button_bottom}
                        onClick={moveToHome}
                    >
                        キャンセル
                </ColorButton>
                </div>
            </div>
        </div >
    )
}
export default withRouter(UploadPage)