import React from "react";
import SideBar from "../components/SideBar";
import Chat from "../components/Chat";

const style = {
    home: `bg-gray-500 h-[100vh] w-full flex items-center justify-center`,
    container: `flex justify-center w-[85%] border-xl border-2 border-gray-500 rounded-xl overflow-hidden w-[65%] h-[80%]`,
    sidebar: `hidden`
}

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.container}>
                <SideBar className={style.sidebar} />
                <Chat />
            </div>
        </div>
    )
}

export default Home;