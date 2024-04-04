"use client";

import style from "./signup.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"

const Signup = () => {

    const router = useRouter();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({data})
        })
        const userInfo = await response.json()
        console.log(userInfo)
        router.push('/login')
    }

    function handleEmailChange(e){
        setData({...data,email: e.target.value})
    }

    function handlePasswordChange(e){
        setData({...data,password: e.target.value})
    }

    function handleNameChange(e){
        setData({...data,name: e.target.value})
    }

    return (
        <form className={style.container} onSubmit={registerUser}>
            <div className={style.cardContainer}>

                <div className={style.close}>
                    <Link href={"/"}>
                        <button>X</button>
                    </Link>
                </div>

                <div className={style.headerContainer}>
                    <span className={style.head}>Sign in for Staff</span><br/>
                    <span className={style.subHead}>Have an Account?
                        <Link href={"/login"}>
                            <span className={style.link}> Sign In</span>
                        </Link>
                    </span>
                </div>

                <div className={style.form}>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"name"}>Name</label><br/>
                        <input onChange={(e) => handleNameChange(e)} className={style.input} type={"text"}
                               name={"name"} value={data.name}
                               placeholder={"Enter your name"}/><br/>
                    </div>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"email"}>Email</label><br/>
                        <input onChange={(e) => handleEmailChange(e)} className={style.input} type={"email"}
                               name={"email"} value={data.email}
                               placeholder={"Enter your email"}/><br/>
                    </div>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"password"}>Password</label><br/>
                        <input onChange={(e) => handlePasswordChange(e)} className={style.input} type={"password"}
                               name={"password"} value={data.password}
                               placeholder={"Enter your password"}/><br/>
                    </div>

                    <button className={style.signin}>Create Account</button>
                    <br/>
                </div>

                <div className={style.agree}>
                    By creating account, you agree to our <br/>
                    <span className={style.terms}>Terms of Service</span>
                </div>

            </div>
        </form>
    );
}
export default Signup