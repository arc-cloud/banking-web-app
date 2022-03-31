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
                                <div className="ksh">KSh. 180,000</div>
                                <div className="usd">$ 1566.58</div>
                            </div>
                        </div>
                        <div className="specific">
                            <p className="title">Accounts</p>
                            <div className="accounts">
                                <div>
                                    <span className="name">Bank Account:</span>
                                    <span className="bal">KSh. 80,000</span>
                                    </div>
                                <div>
                                    <span className="name">PayPal:</span>
                                    <span className="bal">$ 435.16</span>
                                    </div>
                                <div>
                                    <span className="name">Portfolios:</span>
                                    <span className="bal">Ksh. 30,000</span>
                                    </div>
                                <div>
                                    <span className="name">Misc:</span>
                                    <span className="bal">KSh. 20,000</span>
                                    </div>
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