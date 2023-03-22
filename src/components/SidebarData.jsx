
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Search",
        path: "/search",
        icons: <AiIcons.AiOutlineSearch />,
        cName: "nav-text", 
    },
    {
        title: "Products",
        path: "/products",
        icons: <AiIcons.AiOutlineShopping />,
        cName: "nav-text", 
    },
    {
        title: "About",
        path: "/about",
        icons: <AiIcons.AiOutlineInfoCircle />,
        cName: "nav-text",
    },
    {
        title: "Contact",
        path: "/contact",
        icons: <AiIcons.AiOutlineMessage/>,
        cName: "nav-text",
    },
];