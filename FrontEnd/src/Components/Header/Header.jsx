import "./Header.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <div className="nav-bar">
                <div className="innerDiv">
                    <div className="logo">
                        <h1>"100XPORTAL"</h1>
                    </div>
                    <div className="navElements">
                        {/* NavLink wrapped in a div for bottom border */}
                        <div className="nav-item">
                            <NavLink 
                                to="/community" 
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                Community
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink 
                                to="/jobs" 
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                Jobs
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink 
                                to="/companies" 
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                Companies
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink 
                                to="/salaries" 
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                Salaries
                            </NavLink>
                        </div>
                    </div>
                    <div className="other">
                        <div className="search iconDiv">
                            <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="search" className="icons" />
                            <span>Search</span>
                        </div>
                        <div className="bell-icon iconDiv">
                            <img src="https://www.svgrepo.com/show/497360/notification.svg" alt="bell-icon" className="icons"/>
                        </div>
                        <div className="profile iconDiv">
                            <img src="https://cdn-icons-png.flaticon.com/512/4645/4645949.png" alt="user" className="icons"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
