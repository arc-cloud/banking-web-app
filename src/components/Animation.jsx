import { Component, Fragment } from "react";
import '../styles/Animation.css';

export default class Animation extends Component {
    render() {
        return (
            <Fragment>
                <div className="parent-wrapper">
                    <div className="loader">
                        <div className="inner one"></div>
                        <div className="inner two"></div>
                        <div className="inner three"></div>
                    </div>
                </div>
            
            </Fragment>
            )
        }
    }