import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function CreateAccount() {
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [userImage, setImage] = useState();

  function addEmail(e) {
    setEmail(e.target.value);
  }
  function addPass(e) {
    setPassword(e.target.value);
  }
  function addPassConfirm(e) {
    setPasswordConfirm(e.target.value);
  }
  function addEmailConfirm(e) {
    setEmailConfirm(e.target.value);
  }
  function addImage(e) {
    setImage(e.target.value);
  }

  function validarDados() {
    let validos = 0;

    if (typeof window !== "undefined") {
      const loginLocal = localStorage;

      if (email === emailConfirm) {
        loginLocal.setItem("@luciLua-email", `${email}`);
        validos++;
      } else if (email !== emailConfirm) {
        alert("Emails não correspondem");
      }

      if (password === passwordConfirm) {
        loginLocal.setItem("@luciLua-password", `${password}`);
        validos++;
      } else if (password !== passwordConfirm) {
        alert("Senhas não correspondem");
      }

      if (validos > 1) {
        alert("Cadastro realizado com sucesso!");
        loginLocal.setItem("@luciLua-userImage", `${userImage}`)
        window.location.href = "/";
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
        <form>
          <div className={"formLabel"}>
            <h1>Create a Account</h1>
          </div>
          <div className={"inputArea"}>
            <input
              type="text"
              id="email"
              name="email"
              required
              onChange={addEmail}
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={"inputArea"}>
            <input
              type="text"
              id="emailConfirm"
              name="emailConfirm"
              required
              onChange={addEmailConfirm}
              autoComplete="off"
            />
            <label htmlFor="emailConfirm">Email again</label>
          </div>
          <div className={"inputArea"}>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={addPass}
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className={"inputArea"}>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={addPassConfirm}
              required
              autoComplete="off"
            />
            <label htmlFor="passwordConfirm">Password again</label>
          </div>
          <div className={"inputArea"}>
            <input
              type="text"
              id="userImage"
              name="userImage"
              onChange={addImage}
              required
              autoComplete="off"
            />
            <label htmlFor="userImage">Your Photo (link Pinterest or twitter)</label>
          </div>
          <button
            type="submit"
            id="submitSign"
            onClick={(e) => {
              e.preventDefault();
              validarDados();
            }}
          >
            SignIn
          </button>
          <button>
            <Link href="/">
              <a>Already have a account.</a>
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
