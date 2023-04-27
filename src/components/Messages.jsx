import React from "react";
import Message from "./Message";
import Input from "../components/Input"

const style = {
    messages: `bg-gray-300 p-[10px] h-[calc(100%-110px)]`,
}

const Messages = () => {
    return (
        <div className={style.messages}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages;