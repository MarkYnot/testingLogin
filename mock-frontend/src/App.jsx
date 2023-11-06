import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
    const [username, setUsername] = useState('')
    const [temporaryPassword, setTemporaryPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [session, setSession] = useState(null);
    const [messege, setMessage] = useState('');


  const handleLogin = async ()=>{
      try {
         const loginResponse = await axios.post('https://qkl7gurlsg.execute-api.ap-southeast-2.amazonaws.com/prod/agent', {
            username
         })

         console.log(1)

         if(loginResponse.data.messege == 'Agent added successfully') {
          console.log(2)
                const login = await axios.post('https://qkl7gurlsg.execute-api.ap-southeast-2.amazonaws.com/prod/agent/login', {
                  username
              })

              if(login.data.messege === 'New Password required'){
                setSession(login.data.session)
                setMessage(JSON.parse(login.data))
              }else{
                localStorage.setItem('token', login.data.token)
                setMessage({token: login.data.token})
              }
         }else{
            console.log(loginResponse, 'else')
            setMessage(loginResponse.data.message)
         }

      } catch (error) {
        console.log('Login fail, because', error)
      }
  }


  return (
    <>
     <div id="login">
        <h1>Test Login Apis</h1> 
            <input type="text" placeholder="Enter your username(email address)" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <button className="login" type="button" onClick={handleLogin}>Log in</button>
            
            <p>message:</p>
            <textarea placeholder={messege}  cols="30" rows="10"></textarea>
        {/* <img src="" onlick="changeType()" /> */}
    </div>
    </>
  )
}

export default App;

