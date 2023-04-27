import React from "react";

const style = {
    navbar: `flex items-center bg-gray-900 h-[50px] p-[10px] justify-between`,
    logo: `font-bold`,
    user: `flex gap-[10px]`,
    avatar: `h-[24px] w-[24px] rounded-full bg-white object-cover`,
    button: `bg-gray-700 rounded-l text-[12px] px-4 cursor-pointer`
}

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <span className={style.logo}>Chat App</span>
            <div className={style.user}>
                <img className={style.avatar} src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" alt="" />
                <span>Earl</span>
                <button className={style.button}>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar;