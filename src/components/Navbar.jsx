import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import '../styles/Navbar.css';


export default class Navbar extends Component {
    
    render() {
        
        return (
            <Fragment>
                <div className="max-height">
                    <div className="logo">
                        {/* Logo goes here... */}
                    </div>

                    <div className="links">

                        {/* Dashboard */}
                        <Link to='/'>
                            <i class='bx bx-home-alt' ></i>
                            <p className="link-name">Dashboard</p>
                        </Link>

                        {/* Profile */}
                        <Link to='/'>
                            <i class='bx bx-user-circle' ></i>
                            <p className="link-name">Profile</p>
                        </Link>

                        {/* Paypal */}
                        <Link to='/'>
                            <i class='bx bxl-paypal'></i>
                            <p className="link-name">Paypal</p>
                        </Link>

                        {/* Notifications */}
                        <Link to='/'>
                            <i class='bx bx-message-square-detail'></i>
                            <p className="link-name">Notifications</p>
                        </Link>

                        {/* Statement */}
                        <Link to='/'>
                            <i class='bx bx-bar-chart-alt-2'></i>
                            <p className="link-name">Statement</p>
                        </Link>
                        

                        {/* Logout */}
                        <Link to='/' className="logout">
                            <i class='bx bx-log-out'></i>
                            <p className="link-name">Logout</p>
                        </Link>

                    </div>
                </div>
            </Fragment>
        )
    }
}