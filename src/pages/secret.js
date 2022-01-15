import Image from "next/image";
import Link from "next/link";

function Secret() {
  return (
    <div className={"container"}>
      <div className={"content"}>
        <Image
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          alt="background"
        />
        <h1>Secret</h1>
        <Link href="/">
          <a>Back to start</a>
        </Link>
      </div>
    </div>
  );
}

export default Secret;
