import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1 text-center">
                <NavLink to={"/"} className="btn btn-ghost text-xl">Express</NavLink>
            </div>
        </div>
    );
};

export default Header;
