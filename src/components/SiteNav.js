import React from "react";
import { Link } from "react-router-dom";

const SiteNav = () => {
    return (<nav className={"site-nav"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
    </nav>);
};

export default SiteNav;