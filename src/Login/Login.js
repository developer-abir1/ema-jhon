import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../CostomHook/useAuth';
import useFirebase from '../CostomHook/useFirebase';
import './Login.css'

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(results => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-from">
            <div>
                <h2>please Login</h2>
                <from  >
                    <input type="email" placeholder="Enter your email" />
                    <br />
                    <input type="password" placeholder="enter password" />
                    <br />
                    <input type="submit" value="Login" />
                </from>
                <p>New to ema-jhon? <Link to="/register" style={{ color: 'red' }}>Create an account</Link></p>
                <div>---------------------------- or ----------------------------</div>
                <button onClick={handleGoogleLogIn} className="regular-btn">sing in with google</button>
            </div>
        </div>
    );
};

export default Login;