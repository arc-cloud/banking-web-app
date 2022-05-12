import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';


/* Custom function to minimize the navbar */
const minimize_nav = () => {
    const nav = document.getElementById('nav');
    const ham = document.getElementById('ham-icon');
    const empty = document.getElementById('empty');

    if (nav.classList.contains('minimize')) {
        nav.classList.remove('minimize');
        ham.classList.remove('bx-menu');
        ham.classList.add('bx-x');
        empty.classList.add('visible');

    }   else {
        nav.classList.add('minimize');
        ham.classList.remove('bx-x');
        ham.classList.add('bx-menu');
        empty.classList.remove('visible');
    }
}


const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="ham" onClick={minimize_nav}>
                    <i className="bx bx-menu" id='ham-icon'></i>
                </div>
                
                <div className="logo">
                    <span>.io</span>
                    <p>Banking</p>
                </div>

            </div>
            <div className="nav minimize" id='nav'>
                <div className="content">
                    <div className="links">

                        {/* Dashboard */}
                        <NavLink to='/dashboard' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link" onClick={minimize_nav}>
                                <i className='bx bxs-dashboard'></i>
                                <p>Dashboard</p>
                            </div>
                        </NavLink>

                        {/* Profile */}
                        <NavLink to='/profile' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link" onClick={minimize_nav}>
                                <i className='bx bx-user'></i>
                                <p>Profile</p>
                            </div>
                        </NavLink>

                        {/* Paypal */}
                        <NavLink to='/paypal' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link" onClick={minimize_nav}>
                                <i className='bx bxl-paypal'></i>
                                <p>Paypal</p>
                            </div>
                        </NavLink>

                        {/* Statement */}
                        <NavLink to='/statement' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link" onClick={minimize_nav}>
                                <i className='bx bx-file-blank'></i>
                                <p>Statement</p>
                            </div>
                        </NavLink>

                        {/* Settings */}
                        <NavLink to='/settings' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link" onClick={minimize_nav}>
                                <i className='bx bx-cog'></i>
                                <p>Settings</p>
                            </div>
                        </NavLink>



                        {/* Logout */}
                        <NavLink to='/logout' className={(navData) => (navData.isActive ? "current" : 'custom_link')}>
                            <div className="link logout" onClick={minimize_nav}>
                                <i className='bx bx-exit'></i>
                                <p>Logout</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="empty" id='empty'>

            </div>
        </>
    )
}
export default Navbar;