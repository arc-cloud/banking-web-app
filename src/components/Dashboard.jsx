import { Component, Fragment } from "react";
import '../styles/Dashboard.css';

export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg">
                    <div className="dashboard_head">Dashboard</div>
                    <div className="card">
                        <p className="custom-card-header">Account balances</p>
                        <p className="balance">Bank account: Ksh. 200,000</p>
                        <p className="balance">Bank overdraft: Ksh. 20,000</p>
                        <p className="balance">Paypal balance: $120.00</p>
                        <p className="balance">Investments: Ksh. 0</p>
                        </div>
                </div>
            </Fragment>
        )
    }
}