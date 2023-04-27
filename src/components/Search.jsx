import React from "react";

const style = {
    search: `border-b-2 border-gray-600`,
    searchForm: `p-2`,
    inputsearch: `w-full p-2 bg-transparent border-none outline-1 text-white outline-slate-700`,
    userChat: `p-[10px] flex items-center gap-[10px] cursor-pointer text-white hover:bg-gray-800`,
    avatar: `w-[40px] rounded-full object-cover`,
    userChatInfo: ``

}

const Search = () => {
    return (
        <div className={style.search}>
            <div className={style.searchForm}>
                <input className={style.inputsearch} type="text" placeholder="Find a User" />
            </div>
            <div className={style.userChat}>
            <img className={style.avatar} src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" alt="" />
            <div className={style.userChatInfo}>
                <span>Deiniel Mendoza</span>
            </div>
            </div>
        </div>
    )
}

export default Search;