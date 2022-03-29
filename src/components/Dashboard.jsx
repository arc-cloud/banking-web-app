import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <>
        {/* Welcome text */}
        <div className="custom_wrapper">
            <div className="welcome_text">
                <p className="welcome">Welcome!</p>
                <p className="username">Charles Kamiri</p>
            </div>

            {/* Misc */}
            <div className="misc"></div>

            {/* Main content */}
            <div className="main_content">
                <div className="title">Account Information</div>
                <div className="bank_account">Ksh. 40,000</div>
                <div className="paypal">$75</div>
                <div className="portfolio">Ksh. 18,000</div>
            </div>

            {/* Ads */}
            <div className="ads"></div>
        </div>
        </>
    )
}
export default Dashboard;