import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import "../assets/css/login.css";

export default function login() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messege, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!username || !password) return alert("username and password required");
    try {
      const user = await Auth.signIn(username, password);
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        // localStorage.setItem("user", JSON.stringify(user));
        const newPassword = prompt(
          "this is new account, please reset the password"
        );
        Auth.completeNewPassword(user, newPassword).then((user) => {
          const signInUserSession = user.signInUserSession;
          setMessage(JSON.stringify(signInUserSession));
        });
         // history("/changePassword", {});


      } else {
        const signInUserSession = user.signInUserSession;
        setMessage(JSON.stringify(signInUserSession));
      }
    } catch (error) {
      console.error("Login fail", error);
    }
  };

  return (
    <>
      <div id="login">
        <h1>Test Login Apis</h1>
        <span>Username:</span>{" "}
        <input
          type="text"
          placeholder="email address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span>Password:</span>{" "}
        <input
          type="newAccount "
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login" type="button" onClick={handleLogin}>
          Log in
        </button>
        <p>message:</p>
        <textarea
          cols="30"
          rows="10"
          value={messege}
          onChange={() => null}
        ></textarea>
        {/* <img src="" onlick="changeType()" /> */}
      </div>
    </>
  );
}
