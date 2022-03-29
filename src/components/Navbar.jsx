import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="content">
                    <div className="title">Test Bank</div>
                    <div className="links">

                        {/* Dashboard */}
                        <div className="link">
                            <i className='bx bxs-dashboard'></i>
                            <p>Dashboard</p>
                        </div>

                        {/* Profile */}
                        <div className="link">
                            <i className='bx bx-user'></i>
                            <p>Profile</p>
                        </div>

                        {/* Logout */}
                        <div className="link">
                            <i className='bx bx-exit'></i>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className="empty"></div>
            </div>
        </>
    )
}
export default Navbar;