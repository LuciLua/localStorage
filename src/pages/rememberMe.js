import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function rememberMe() {

    function emailGet() {
        if (typeof window !== 'undefined') {
            const emailLocal = localStorage.getItem('@luciLua-email')
            return emailLocal
        }
    }

    function passGet() {
        if (typeof window !== 'undefined') {
            const passLocal = localStorage.getItem('@luciLua-password')
            return passLocal
        }
    }

    return (
        <div className={"container"}>
            <div className={"content"}>
                <Image
                    src="/background.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="background"
                />
                <form>
                    <div className={"formLabel"}>
                        <h1>Remember me</h1>
                    </div>
                    <div className={"inputArea"}>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            readOnly
                            value={emailGet()}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={"inputArea"}>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            readOnly
                            value={passGet()}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className={"btnMain"}>
                        <Link href="/">
                            <a>I remembered</a>
                        </Link>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default rememberMe;
