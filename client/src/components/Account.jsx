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

useEffect(() => {

  console.log(userInfo)
},[userInfo])


  return (
    <div>
      {/* <Construction/> */}
      {loginStatus !== true &&(
            <>
      <Registration loginStatus={loginStatus} setLoginStatus={setLoginStatus} userInfo={userInfo} setUserInfo={setUserInfo}/>
      </>
     )}
    </div>
  )
}

export default Account