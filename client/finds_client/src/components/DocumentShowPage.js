import React,{useState} from 'react';
import {Typography} from "@material-ui/core";
import { Document, Page } from 'react-pdf/dist/entry.jest';
import{withStyles} from "@material-ui/core"

import "./DocumentShowPage.css"

import sampleFile from "../sample.pdf";

const style={
    doc:{
        width:"100vw",
        height:"80vh",
        margin:0
    }
}

class DocumentShowPage extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    handlePageInc = () => {
        const { numPages, pageNumber } = this.state;
        if (pageNumber >= numPages) return;
        this.setState((state) => {
            return { pageNumber: state.pageNumber + 1 }
        })
    }

    handlePageDec = () => {
        const { pageNumber } = this.state;
        if (pageNumber <= 1) return;
        this.setState((state) => {
            return { pageNumber: state.pageNumber - 1 }
        })
    }

    render() {
        const { pageNumber, numPages } = this.state;
        const {classes}=this.props;
        return (
            <div className={classes.doc}>
                <Document
                    file={sampleFile}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber}/>
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                {pageNumber!==1&&<div className="left" onClick={this.handlePageDec}>{'<'}</div>}
                {numPages!==pageNumber&&<div className="right" onClick={this.handlePageInc}>{'>'}</div>}
            </div>
        );
    }
}
export default withStyles(style)(DocumentShowPage);