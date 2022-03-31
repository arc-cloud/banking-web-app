import Welcome from './Welcome';
import '../styles/Dashboard.css';


const Dashboard = () => {
    return (
        <>
            <div className="dash_wrapper">
                <div className='sub_wrapper profile'>
                    <img src={require('../picture.jpg')} alt="" />
                </div>
                <div className='sub_wrapper welcome'>
                    <Welcome />
                </div>
                <div className='sub_wrapper main'>
                    <div className="left">
                        <div className="total">
                            <p className="title">Total Balance</p>
                            <div className="t_balance">
                                <div className="ksh">KSh. 132,000</div>
                                <div className="usd">$ 1148.83</div>
                            </div>
                        </div>
                        <div className="specific">
                            <p className="title">Accounts</p>
                            <div className="accounts">
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;