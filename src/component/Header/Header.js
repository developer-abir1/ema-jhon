import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../CostomHook/useAuth';
const Header = () => {


    const { user, logout } = useAuth();




    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }} to="/shop">Shop</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod",

                }} to="/review">Order Review</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }} to="/inventory">Manage Inventory
                </NavLink>
                {user.email && <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }} to="/name">Hello {user.displayName}
                </NavLink>}
                {user.email ? <button onClick={logout} className="regular-btn">Logout</button> : <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }} to="/login">Login
                </NavLink>}
            </nav>
        </div>
    );
};

export default Header;