import React, { Component } from "react";
import { Link } from "react-router-dom";
//The two imports below are for: make a logout link -->  to go hearder.js, and if were loged in show these linkes else show others so:
//Lets check that were logged in --> so we do that we import { connect } from "react-redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import logo from "./logo2.png";

import './index.css';


export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ""}</strong>
                </span>
                <li className="nav-item4">
                    <center><button
                        onClick={this.props.logout}
                        className="nav-link btn btn-info btn-sm text-light">
                        Logout
                    </button></center>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item1">
                    <Link to="/register" className="nav-link1">
                        Register
          </Link>
                </li>
                <li className="nav-item2">
                    <Link to="/login" className="nav-link1">
                        Login
          </Link>
                </li>
            </ul>
        );

        return (
           <div className="card-group82">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">

                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <nav className="menu">

                        <h1 style={{
                            backgroundImage: 'url(' + logo + ')'
                        }} className="menu__logo"></h1>
                    </nav>

                </div>
                {isAuthenticated ? authLinks : guestLinks}

            </nav>
       </div>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Header)
