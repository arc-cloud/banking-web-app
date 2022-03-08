import { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={ <Navbar /> }  />
                </Routes>
            </Router>
        )
    }
}