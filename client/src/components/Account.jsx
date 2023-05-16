import React, { useEffect, useState } from "react";
import Axios from "axios";
import Registration from './Register'
import './account.css'

function Account() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({})

// const getUserInfo = () => {
//   Axios.get('http://localhost:3001/getUserInfo',{
//     username : userInfo.username
//   }).then((response) => console.log(response))
// }
const logout = () => {
  // console.log('pioupiou')
  // console.log(localStorage.length)
  localStorage.removeItem("token");
  setLoginStatus(false)
};

useEffect(() => {

  console.log(userInfo)
},[userInfo, localStorage])


  return (
    <div className="account-main">
      {/* <Construction/> */}
      {/* {loginStatus !== true &&( */}
     {!localStorage.getItem("token")&& (
            <>
      <Registration loginStatus={loginStatus} setLoginStatus={setLoginStatus} userInfo={userInfo} setUserInfo={setUserInfo}/>
      </>
     )}
       {localStorage.getItem("token")&& (
        <div className="user-auth-true">

<div className="user-welcome">
 <h1> Welcome {userInfo.username}</h1>
</div>

<div className="user-info"></div>

<div className="logout-wrap">

        <button className="logout" onClick={logout}>Log out</button>
</div>
        
        
        </div>
       )}
    </div>
  )
}

export default Account