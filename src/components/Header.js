import { useState } from "react";
import { CDN_APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [logout, setLogout] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_APP_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <button
                        className="login"
                        onClick={e => logout === "Login" ? setLogout("Logout") : setLogout("Login")}
                    >
                        {logout}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header