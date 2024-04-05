"use client";

import style from "./signup.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"
import toast from "react-hot-toast";

const Signup = () => {

    const router = useRouter();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault()
        axios.post('/api/signup',data)
            .then(() => toast.success('User has been registered'))
            .catch(() => toast.error('Something went wrong!'))
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
                        <input value={data.name} onChange={(e) => setData({...data, name: e.target.value})} className={style.input} type={"text"}
                               name={"name"}
                               placeholder={"Enter your name"}/><br/>
                    </div>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"email"}>Email</label><br/>
                        <input value={data.email}
                               onChange={(e) => setData({...data, email: e.target.value})}
                               className={style.input} type={"email"}
                               name={"email"}
                               placeholder={"Enter your email"}/><br/>
                    </div>
                    <div className={style.formInput}>
                        <label className={style.label} htmlFor={"password"}>Password</label><br/>
                        <input value={data.password}
                               onChange={(e) => setData({...data, password: e.target.value})}
                               className={style.input} type={"password"}
                               name={"password"}
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