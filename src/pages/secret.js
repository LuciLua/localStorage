import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react'

import styles from '../styles/secret.module.css'

function Secret(props) {

    var userNameInsert = ''
    var imageInsert = ''
    var msgInsert = ''

    if (typeof window !== "undefined") {

        const loginLocal = localStorage;
        const emailLocal = loginLocal.getItem("@luciLua-email");
        const userImageLocal = loginLocal.getItem("@luciLua-userImage");

        const msgLocal = loginLocal.getItem("@luciLua-msg");
        console.log(msgLocal)
        msgInsert = msgLocal

        imageInsert = userImageLocal

        // get userName: tudo antes do @
        const arrobaPosition = emailLocal.indexOf("@")
        const user = emailLocal.substring(0, arrobaPosition)
        userNameInsert = user

    }

    const [msg, setMsg] = useState('')
    const [userName, setUserName] = useState('User')
    const [imageURL, setImageURL] = useState('/background.jpg')

    function addMsg(e) {
        setMsg(e.target.value)
        console.log(msg)

        if (typeof window !== "undefined") {
            const loginLocal = localStorage;
            loginLocal.setItem("@luciLua-msg", msg);
        }
    }

    useEffect(() => {
        setMsg(msgInsert)
        setUserName(userNameInsert)
        setImageURL(imageInsert)
    }, [])

    // https://nextjs.org/docs/messages/react-hydration-error


    // const { userName, imageUrl } = props

    return (
        <div className={"container"}>
            <div className={"content"}>
                <Image
                    priority
                    src="/background.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="background"
                />
                <div className="secretSection">
                    <h1>{userName}</h1>
                    <div className={styles.readmeProfile}>
                        <div className="userImg">
                            <Image
                                priority
                                src={imageURL}
                                layout="fill"
                                objectFit="cover"
                                alt="userImage"
                            />
                        </div>
                        <div>
                            <span>Salve uma mensagem aqui!</span>
                            <textarea
                                onChange={addMsg}
                                value={msg}
                                className={styles.aboutYou}
                                type='text' />
                        </div>
                    </div>
                    <Link href="/">
                        <a>Back to start</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Secret;
