import '../styles/Welcome.css';
import { useState} from 'react';

const Welcome = () => {
    const [state, setState] = useState({
        email: "",
        password: ""});


    return (
        <>
        <div className="bg">
            <div className="wrapper">
                <div className="wrapper_head">
                    <h2>Sign in</h2>
                </div>
                <div className="wrapper_body">
                    <label>Email:
                        <input type="email" value={state.email} onChange={ev => setState({...state, email: ev.target.value})} />
                    </label>
                    <label>Password:
                        <input type="password" value={state.password} onChange={ev => setState({...state, password: ev.target.value})} />
                    </label>
                    <button>Log in</button>
                </div>
                <div className="sign_up">
                    <p>Don't have an account?</p>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Welcome;