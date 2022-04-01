import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="content">
                    <div className="title">Test Bank</div>
                    <div className="links">

                        {/* Dashboard */}
                        <NavLink to='/dashboard' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link">
                                <i className='bx bxs-dashboard'></i>
                                <p>Dashboard</p>
                            </div>
                        </NavLink>

                        {/* Profile */}
                        <NavLink to='/profile' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link">
                                <i className='bx bx-user'></i>
                                <p>Profile</p>
                            </div>
                        </NavLink>

                        {/* Paypal */}
                        <NavLink to='/paypal' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link">
                                <i className='bx bxl-paypal'></i>
                                <p>Paypal</p>
                            </div>
                        </NavLink>

                        {/* Statement */}
                        <NavLink to='/statement' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link">
                                <i className='bx bx-file-blank'></i>
                                <p>Statement</p>
                            </div>
                        </NavLink>

                        {/* Settings */}
                        <NavLink to='/settings' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link">
                                <i className='bx bx-cog'></i>
                                <p>Settings</p>
                            </div>
                        </NavLink>



                        {/* Logout */}
                        <NavLink to='/logout' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link logout">
                                <i className='bx bx-exit'></i>
                                <p>Logout</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="empty"></div>
            </div>
        </>
    )
}
export default Navbar;