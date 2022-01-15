import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react'


// export async function getStaticProps() {

//     const imageUrl = '/background.jpg'

//     return {
//         props: {
//             imageUrl,
//             userName
//         }
//     }
// }

function Secret(props) {

    var userNameInsert = ''
    var imageInsert = ''

    if (typeof window !== "undefined") {

        const loginLocal = localStorage;
        const emailLocal = loginLocal.getItem("@luciLua-email");
        const userImageLocal = loginLocal.getItem("@luciLua-userImage");
        imageInsert = userImageLocal

        // get userName: tudo antes do @
        const arrobaPosition = emailLocal.indexOf("@")
        const user = emailLocal.substring(0, arrobaPosition)
        userNameInsert = user
    }

    const [userName, setUserName] = useState('User')
    const [imageURL, setImageURL] = useState('/background.jpg')

    useEffect( () => {
        setUserName(userNameInsert)
        setImageURL(imageInsert)
    }, [])


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
                    <div className="userImg">
                        <Image
                            priority
                            src={imageURL}
                            // src="https://pbs.twimg.com/profile_images/1356824377694834689/c8dg1cHW_400x400.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="userImage"
                        />
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
