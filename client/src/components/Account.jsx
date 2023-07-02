import React, { useEffect, useState } from "react";
import Axios from "axios";
import Registration from "./Register";
import "./account.css";
import { useDispatch, useSelector } from "react-redux";
import { userOut } from "../features/UserReducer";

function Account() {
  const userData = useSelector((state) => state.user_data.userData.user)
  const userDataInfo = useSelector((state) => state.user_data.userData.user_info)
  const [loginStatus, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState(userData);

  const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');

  const dispatch = useDispatch()

  const logout = () => {
    setLoginStatus(false);
dispatch(userOut())

localStorage.removeItem('token')
  };

useEffect(() => {
setUserInfo(userData)
},[loginStatus])



  return (
    <div className="account-main">

      {!localStorage.getItem("token") && (
        <>
          <Registration
            loginStatus={loginStatus}
            setLoginStatus={setLoginStatus}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </>
      )}
      {localStorage.getItem("token") && userInfo && (
        <div className="user-auth-true">
          <div className="user-welcome">
            <h1> Welcome <span id="username">{toPascalCase(userInfo.username)}</span></h1>
          </div>
        <div className="dashboard">
          <div className="user-infos">
            <div className="personnal-infos">
              <ul id="list">
                <li>{toPascalCase(userInfo.username)}</li>
                <li>
                  {userInfo.firstname} {userInfo.lastname}
                </li>
                <li>{userInfo.email}</li>
                <li id="adress">{userDataInfo.number} {userDataInfo.street}, <br/>
                {userDataInfo.postal} {toPascalCase(userDataInfo.city)}, <br/>
                {(userDataInfo.country).toUpperCase()}</li>
                <li>{userDataInfo.phone}</li>
              </ul>
            </div>
          </div>
<div className="user-activities">
          <div className="order-history"> No orders yet</div>
          <div className="saved-guitars"> Start tweaking your six strings now!</div></div>
          </div>
          <div className="logout-wrap">
            <button className="logout" onClick={logout}>
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
