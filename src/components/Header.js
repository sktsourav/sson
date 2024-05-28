import { useState } from "react";
import { CDN_APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [logout, setLogout] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-orange-100">
            <div className="logo-container">
                <img className="w-36 mix-blend-multiply" src={CDN_APP_LOGO} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-5">
                    <li className="px-4 font-semibold">Online {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4 font-semibold"><Link to="/">Home</Link></li>
                    <li className="px-4 font-semibold"><Link to="/about">About Us</Link></li>
                    <li className="px-4 font-semibold"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-semibold"><Link to="/">Cart</Link></li>
                    <li className="px-4 font-semibold"><Link to="/grocery">Grocery</Link></li>
                    <button
                        className="px-4 font-semibold"
                        onClick={e => logout === "Login" ? setLogout("Logout") : setLogout("Login")}
                    >
                        {logout}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header