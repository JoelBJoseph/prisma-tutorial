"use client";

import style from "./login.module.css"
import Link from "next/link";
import {useState} from "react";
import { signIn } from "next-auth/react"
import toast from "react-hot-toast";

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        signIn('credentials', {...data, redirect: false})
            .then((callback) => {
                if (callback?.error){
                    toast.error(callback.error)
                }

                if(callback?.ok && callback?.error){
                    toast.success('Logged in successfully')
                }
            })
    }

    return (
        <div className={style.container}>
            <form className={style.cardContainer} onSubmit={loginUser}>

                <div className={style.close}>
                    <Link href={"/"}>
                        <button>X</button>
                    </Link>
                </div>

                <div className={style.headerContainer}>
                    <span className={style.head}>Sign in!</span><br/>
                    <span className={style.subHead}>New to this?
                        <Link href={"/signup"}>
                            <span className={style.link}> Create an Account</span>
                        </Link></span>
                </div>

                <div className={style.form}>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"email"}>Email</label><br/>
                        <input value={data.email} onChange={e => setData({...data, email: e.target.value})} className={style.input} type={"email"} name={"email"}
                               placeholder={"Enter your email"}/><br/>
                    </div>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"password"}>Password</label><br/>
                        <input value={data.password} onChange={e => setData({...data, password: e.target.value})} className={style.input} type={"password"} name={"password"}
                               placeholder={"Enter your password"}/><br/>
                    </div>

                    <button className={style.signin}>Sign In</button>
                    <br/>
                    <span className={style.forgot}>Forgot your password?</span>
                </div>
                <svg width="450" height="2">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#333" strokeWidth="2"/>
                </svg>
                <div className={style.continueContainer}>
                    <span className={style.or}>or sign in using:</span><br/>
                    <button className={style.google}>Continue with Google</button>
                </div>

            </form>
        </div>
    );
}
export default Login