import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function rememberMe() {
    if (typeof window !== "undefined") {
        const loginLocal = localStorage;
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
                            required
                            value={localStorage.getItem('@luciLua-email')}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={"inputArea"}>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            required
                            value={localStorage.getItem('@luciLua-password')}
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
