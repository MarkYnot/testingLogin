import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

export default function changePassword() {
  const [newPassword, setNewPassword] = useState("");
  const user = localStorage.getItem("user");

  const reset = async () => {
    try {
      Auth.completeNewPassword(user, newPassword).then((user) => {
        console.log(user);
        // alert('new password is reseted, please login')
        // localStorage.removeItem('user')
        // history('/changePassword',{})
      });
    } catch (error) {
      console.log("Login fail, because", error);
    }
  };

  return (
    <>
      <div id="login">
        <h1>Change your password</h1>
        <input
          type="text"
          placeholder="input new Password here"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="login" type="button" onClick={reset}>
          change password
        </button>

        {/* <img src="" onlick="changeType()" /> */}
      </div>
    </>
  );
}
