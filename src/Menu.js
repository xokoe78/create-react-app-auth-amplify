import React, {Component} from 'react';
import {Auth} from "aws-amplify";
import User from "./User";

class Menu extends Component {
    render() {
        return (
            <div>
                {
                    /* Main Sidebar Container */
                }
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img
                            src="dist/img/AdminLTELogo.png"
                            alt="AdminLTE Logo"
                            className="brand-image img-circle elevation-3"
                            style={{ opacity: ".8" }}
                        />
                        <span className="brand-text font-weight-light">Fx Guardian</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img
                                    src="dist/img/user2-160x160.jpg"
                                    className="img-circle elevation-2"
                                    alt="User Image"
                                />
                            </div>
                            <div className="info">
                                <a href="nowhere" className="d-block">
                                    <User infos={Auth.currentUserInfo()} />
                                </a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item has-treeview menu-open">
                                    <a href="nowhere" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Home
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/widgets.html" className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Risk Management
                                            <span className="right badge badge-danger">Off</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="nowhere" className="nav-link">
                                        <i className="nav-icon fas fa-copy" />
                                        <p>
                                            Connect
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="nowhere" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>
                                            Trading History
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>
        )
    }
}

export default Menu