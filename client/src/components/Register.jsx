import React, { useEffect, useState } from "react";
import Axios from "axios";



export default function Registration({loginStatus, setLoginStatus, userInfo, setUserInfo}) {  
const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  Axios.defaults.withCredentials = true;



  const register = () => {
    Axios.post("http://localhost:3001/register", {
        firstname : firstnameReg,
        lastname : lastnameReg,
        email : emailReg,
      username: usernameReg,
      password: passwordReg,
    }).then(userAuthenticated);
  };

const userAuthenticated = () => {
    Axios.get('http://localhost:3001/isUserAuth', {
        headers: {
            "x-access-token": localStorage.getItem("token")
        }
    }).then((response)=> {
        console.log(response)
    })
}

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.auth == false) {
        setLoginStatus(false);
      } else {
        localStorage.setItem("token", response.data.token)
        setLoginStatus(true);
      }
    }).then(userAuthenticated)
  };





  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        console.log(response.data)
        setLoginStatus(response.data.user[0].username);
        setUserInfo(response.data.user[0])
      } else if(response.data.loggedIn == false){
        setLoginStatus(false)
        setUserInfo(null)
      }
    });
  }, [loginStatus]);

  return (
    <div className="login-register">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
      <div className="registration">
        <h1>Registration</h1>
        <label>Firstname</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstnameReg(e.target.value);
          }}
        />
        <label>Lastname</label>
        <input
          type="text"
          onChange={(e) => {
            setLastnameReg(e.target.value);
          }}
        />
              <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

      
    </div>
  );
}