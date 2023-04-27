import React from "react";

const style = {
    container: `w-full bg-gray-500 h-[100vh] flex items-center justify-center`,
    wrapper: `w-[400px] h-[370px] bg-white px-[60px] py-[20px] rounded-xl flex flex-col items-center gap-[10px]`,
    form: `w-full flex flex-col gap-[20px]`,
    logo: `font-bold text-[24px] text-gray-700`,
    signin: `font-bold text-[18px] text-gray-700`,
    input: `p-[12px] border-2 rounded-[5px]`,
    button: `text-white bg-gray-800 py-[12px] rounded-l cursor-pointer border-none hover:bg-gray-900 font-bold`,
    register: `mt-[15px]`
}

const LoginPage = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <span className={style.logo}>Chat App</span>
                <span className={style.signin}>Sign In</span>
                <form className={style.form}>
                    <input className={style.input} type="email" placeholder="Email"/>
                    <input className={style.input} type="password" placeholder="Password"/>
                    <button className={style.button}>Log In</button>
                </form>
                <p className={style.register}>Already have an account? Register</p>
            </div>
        </div>
    )
}

export default LoginPage;