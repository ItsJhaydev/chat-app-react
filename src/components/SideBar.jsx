import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const style = {
    sidebar: `w-[500px] bg-gray-700 text-white`
}

const SideBar = () => {
    return (
        <div className={style.sidebar}>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default SideBar;