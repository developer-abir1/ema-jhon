import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../CostomHook/useAuth';

const Register = () => {

    const { googleSignIn } = useAuth()
    return (
        <div className="login-from">
            <div>
                <h2>Register: Create Account </h2>
                <from>
                    <input type="email" name="email" placeholder="Enter Your you email" id="" />
                    <br />
                    <input type="password" name="password" placeholder="Enter Your you password " id="" />
                    <br />

                    <input type="password" name="password" placeholder="Enter Your your Re-password " id="" />
                    <br />
                    <input type="submit" value="register" id="" />
                </from>
                <p>Already have an account? <Link to="/login" style={{ color: 'green' }}>Login</Link></p>
                <div>-------------------------or----------------------------</div>
                <button onClick={googleSignIn} className="regular-btn">Sing in with google</button>
            </div>
        </div>
    );
};

export default Register;