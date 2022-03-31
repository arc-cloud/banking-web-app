import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="content">
                    <div className="title">Test Bank</div>
                    <div className="links">

                        {/* Dashboard */}
                        <Link to='/dashboard' className='custom_link'>
                        <div className="link">
                            <i className='bx bxs-dashboard'></i>
                            <p>Dashboard</p>
                        </div>
                        </Link>

                        {/* Profile */}
                        <div className="link">
                            <i className='bx bx-user'></i>
                            <p>Profile</p>
                        </div>

                        {/* Statement */}
                        <div className="link">
                            <i className='bx bx-file-blank'></i>
                            <p>Statement</p>
                        </div>

                        {/* Settings */}
                        <div className="link">
                            <i className='bx bx-cog'></i>
                            <p>Settings</p>
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