import { useState } from "react";
import { CDN_APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [logout, setLogout] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_APP_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online {onlineStatus ? "✅" : "🔴" }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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