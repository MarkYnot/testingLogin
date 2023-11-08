import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/login.css'

export default function adminAddUser() {

  const [username, setUsername] = useState('')
  const [temporaryPassword, setTemporaryPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [session, setSession] = useState(null);
  const [messege, setMessage] = useState('');


const addUser = async ()=>{
    try {
              setMessage('')
              const login = await axios.post('https://qkl7gurlsg.execute-api.ap-southeast-2.amazonaws.com/prod/agent/', {
                username
            })
              
            
             if(login.data.emptyUserName || login.data.alreadyExit || login.data.agentAdded){
                console.log(login)
                 setMessage(login.data.messege)
             }


    } catch (error) {
      console.log('Login fail, because', error)
    }
}





return (
  <>
   <div id="login">
      <h1>Admin Add User</h1> 
          <input type="text" placeholder="Enter your username(email address)" value={username} onChange={(e)=> setUsername(e.target.value)}/>
          <button className="login" type="button" onClick={addUser}>Add user</button>
          
          <p>message:</p>
          <textarea cols="30" rows="10" value={messege}></textarea>
      {/* <img src="" onlick="changeType()" /> */}
  </div>
  </>
)
}
