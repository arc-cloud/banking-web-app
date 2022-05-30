import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Paypal from './Paypal';
import Statement from './Statement';
import Settings from './Settings';
import Logout from './Logout';
import Loader from './Loader';
import '../styles/App.css';


 

const App = () => {
    return (
      
        <>
        
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Welcome /> } />
                    <Route path='/dashboard' element={ <Dashboard /> } />
                    <Route path='/profile' element={ <Profile /> } />
                    <Route path='/paypal' element={ <Paypal /> } />
                    <Route path='/statement' element={ <Statement /> } />
                    <Route path='/settings' element={ <Settings /> } />
                    <Route path='/logout' element={ <Logout /> } />
                </Routes>
            </Router>
        </>

    );
}
export default App;