import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const SiteNav = (props) => {
    return (<Menu>
        <Menu.Item as={NavLink} exact to={"/"} >Home</Menu.Item>
        <Menu.Item as={NavLink} to={"/about"} >About</Menu.Item>
    </Menu>);
};

export default SiteNav;