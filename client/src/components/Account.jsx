import React, { useEffect, useState } from "react";
import axios from "axios";
import Registration from "./Register";
import "./account.css";
import { useDispatch, useSelector } from "react-redux";
import { userOut, userGuitarsSave } from "../features/UserReducer";
import { SignOut } from "@phosphor-icons/react";
import { addColor, triggerDrop, resetDrop } from "../features/Colors";
function Account() {
  const userData = useSelector((state) => state.user_data.userData.user)
  const userDataInfo = useSelector((state) => state.user_data.userData.user_info)
  const userGuitars = useSelector((state) => state.user_data.userData.user_guitars)
  const [loginStatus, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState(userData);
  const [userGtrs, setUserGtrs] = useState([])


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

  useEffect(() => {
    setUserInfo(userData)
setUserGtrs(userGuitars)


  },[])
const handleSelectGuitar = async (e) => {
  const gtr = e;
  const user = userInfo.id
  console.log(user,gtr);
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/items/fetchguitar`, {
      params: { gtr: gtr, user : user },
    })
    .then((res) => {
      console.log(res)
      const fetched = res.data;
      const object = Object.values(fetched).reduce((acc, item) => {
        acc[item.name] = item.color;
        acc.id = item.id_guitar;
        acc.gloss = item.gloss;
        acc.wood = parseInt(item.wood, 10);
        acc.scratch = parseInt(item.scratch, 10);
        item.id_texture
          ? (acc.texture_path = "stocked/1681217837265.png")
          : item.texture_path;

        return acc;
      }, {});

      // setModel(fetched[0].model);
      dispatch(addColor(object));
      console.log('objjjj', object)
    });
};
console.log(userGtrs)
  const getGuitars = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/items/getguitars`, {
        id_user: userData.user.id,
      })
      .then((res) => {
        console.log(res.data)
        setUserGtrs(res.data);
      });
  };



  useEffect(() => {
// getGuitars()
  },[])
  

const editgtr = () => {

}


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
      
        <div className="saved-guitars"> 
        <div className="guitars-all">
         { userGuitars ? 
          userGuitars.map((gtr, key) => <div className="guitar-thb" key={key} onClick={() => handleSelectGuitar(gtr.id_guitar)} value={gtr.id}>
      <a href="/">
          {  gtr.id_guitar}
        </a>
        
          </div>)
 : "Start tweaking your six strings now! " }
 </div>
    </div>
      </div>
          </div>
          <div className="logout-wrap">
            <button className="logout" onClick={logout}>
              Log out <SignOut size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
