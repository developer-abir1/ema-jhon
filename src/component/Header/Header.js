import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
const Header = () => {

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

                }} to="/review">Order Reivew</NavLink>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }} to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;