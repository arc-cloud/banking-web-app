import '../styles/Navbar.css';


const Navbar = () => {
    return(
        <>
            {/* Horizontal Navbar */}
            <div className="h_nav">
            </div>

            {/* Vertical Navbar */}
            <div className="v_nav">
                <div className="spacer"></div>

                <div className="section">
                    <i className="bx bxs-dashboard"></i>
                    Dashboard
                </div>

                <div className="section">
                    <i class='bx bx-user' ></i>
                    Account
                </div>

                <div className="section">
                    <i class='bx bxl-paypal' ></i>
                    Paypal
                </div>

                <div className="section">
                    <i class='bx bx-bar-chart-alt' ></i>
                    Statistics
                </div>

                <div className="section">
                    <i class='bx bx-cog' ></i>
                    Settings
                </div>

                <div className="section log_out">
                    <i class='bx bx-log-out' ></i>
                    Logout
                </div>
            </div>

        </>
    )
}
export default Navbar;