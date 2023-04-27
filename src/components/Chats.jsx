import React from "react";

const style = {
    chats: ``,
    userChat: `p-[10px] flex items-center gap-[10px] cursor-pointer text-white hover:bg-gray-800`,
    avatar: `w-[40px] rounded-full object-cover`,
    userChatInfo: ``,
    span: `text-[18px] font-medium`,
    messages: `text-[14px] text-gray-400`
}

const Chats = () => {
    return (
        <div className={style.chats}>
            <div className={style.userChat}>
            <img className={style.avatar} src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" alt="" />
            <div className={style.userChatInfo}>
                <span className={style.span}>Eunice Mendoza</span>
                <p className={style.messages}>Hello</p>
            </div>
            </div>
            <div className={style.userChat}>
            <img className={style.avatar} src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" alt="" />
            <div className={style.userChatInfo}>
                <span className={style.span}>Eunice Mendoza</span>
                <p className={style.messages}>Hello</p>
            </div>
            </div>
            <div className={style.userChat}>
            <img className={style.avatar} src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" alt="" />
            <div className={style.userChatInfo}>
                <span className={style.span}>Eunice Mendoza</span>
                <p className={style.messages}>Hello</p>
            </div>
            </div>
        </div>
    )
}

export default Chats;