import Image from "next/image";
import Link from "next/link";

function Home() {
  function validarLogin() {
    if (typeof window !== "undefined") {
      const loginLocal = localStorage;

      const password = loginLocal.getItem("@luciLua-password");
      const email = loginLocal.getItem("@luciLua-email");

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");

      if (emailInput.value === email && passwordInput.value === password) {
        window.location.href = "/secret";
      } else {
        alert("entre com um login válido");
      }
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
        <form id="formLogin">
          <div className={"formLabel"}>
            <h1>Login</h1>
          </div>
          <div className={"inputArea"}>
            <input type="text" id="email" required autoComplete="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className={"inputArea"}>
            <input type="password" id="password" autoComplete="current-password" required />
            <label htmlFor="password">Password</label>
          </div>
          <button
            className="btnPrimary"
            type="button">
            <Link href="/rememberMe">
              <a>I forgot my password</a>
            </Link>
          </button>
          <button
            type="submit"
            id="submitButton"
            className="btnMain"
            onClick={(e) => {
              e.preventDefault();
              validarLogin();
            }}
          >
            Login
          </button>
          <button
          type="button" 
          className="btnSecondary">
            <Link href="/createAccount">
              <a>Create a account</a>
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
