import { useState } from "react";
import { CDN_APP_LOGO } from "../utils/constants";

const Header = () => {
    const [logout, setLogout] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_APP_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={e => logout === "Login" ? setLogout("Logout"): setLogout("Login")}
                    >
                        {logout}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header