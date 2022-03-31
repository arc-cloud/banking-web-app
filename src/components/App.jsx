import '../styles/App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;