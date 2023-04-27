import React from "react";

import AddAvatar from "../img/addImageAvatar.jpeg"

const style = {
    container: `w-full bg-gray-500 h-[100vh] flex items-center justify-center`,
    wrapper: `w-[400px] bg-white px-[60px] py-[20px] rounded-xl flex flex-col items-center gap-[10px]`,
    form: `w-full flex flex-col gap-[20px]`,
    logo: `font-bold text-[24px] text-gray-700`,
    register: `font-bold text-[18px] text-gray-700`,
    input: `p-[12px] border-2 rounded-[5px]`,
    button: `text-white bg-gray-800 py-[12px] rounded-l cursor-pointer border-none hover:bg-gray-900 font-bold`,
    login: `text-gray-700 mt-[10px]`,
    label: `flex items-center gap-[15px] text-gray-400`,
    avatar: `w-[50px]`,
}

const RegisterPage = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <span className={style.logo}>Chat App</span>
                <span className={style.register}>Register</span>
                <form className={style.form}>
                    <input className={style.input} type="text" placeholder="Display Name"/>
                    <input className={style.input} type="email" placeholder="Email"/>
                    <input className={style.input} type="password" placeholder="Password"/>
                    <input style={{display: "none"}} className={style.input} type="file" id="file" />
                    <label className={style.label} htmlFor="file">
                        <img className={style.avatar} src={AddAvatar} alt="" />
                        <span className={style.span}>Add an Avatar</span>
                    </label>
                    <button className={style.button}>Sign Up</button>
                </form>
                <p className={style.login}>Already have an account? Log In</p>
            </div>
        </div>
    )
}

export default RegisterPage;