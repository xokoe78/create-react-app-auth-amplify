import React, {Component} from 'react';
import {Auth} from "aws-amplify";
import User from "./User"

function signOut() {
    Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

function checkUser() {
    Auth.currentAuthenticatedUser()
        .then(user => console.log({ user }))
        .catch(err => console.log(err))
}



class Header extends Component {


    render() {
        return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="nowhere" role="button">
                                <i className="fas fa-bars" />
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">

                            <p className="nav-link">
                                Welcome
                            </p>
                        </li>
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Messages Dropdown Menu */}
                        <li className="btn btn-sm btn-secondary float-right" onClick={signOut}>
                            Logout
                        </li>
                    </ul>
                </nav>
                {
                    /* /.navbar */
                }

            </div>
        );
    }
}

export default Header;