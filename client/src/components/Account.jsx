import React, { useEffect, useState } from "react";
import axios from "axios";
import Registration from "./Register";
import "./account.css";
import { useDispatch, useSelector } from "react-redux";
import { userOut, userGuitarsSave, userUpdate } from "../features/UserReducer";
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
console.log(userInfo)
},[loginStatus])

  useEffect(() => {
    setUserInfo(userData)
setUserGtrs(userGuitars)


  },[userInfo])
const handleSelectGuitar = async (e) => {
  const gtr = e;
  const user = userInfo.id
  console.log(user,gtr);
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/items/fetchguitar`, {
      params: { gtr: gtr, user : user },
    })
    .then((res) => {
      let txPath
      const fetched = res.data;
      const object = Object.values(fetched).reduce((acc, item) => {
        acc[item.name] = item.color;
        acc.id = item.id_guitar;
        acc.gloss = item.gloss;
        acc.wood = parseInt(item.wood, 10);
        acc.scratch = parseInt(item.scratch, 10);
console.log(item.id_texture)
        if(item.id_texture !== "stocked/HD_transparent_picture.png"){

          (axios.get(`${import.meta.env.VITE_BACKEND_URL}/items/fetchtextures`, {
            params: { txID: item.id_texture},
          }).then((tex) => {
console.log(tex.data)
        txPath = tex.data[0].path
          return   acc.texture_path = txPath
          }) )
        
        }
          else (acc.texture_path = "stocked/HD_transparent_picture.png");

          console.log(acc.texture_path)
        return acc;
      }, {});

      // setModel(fetched[0].model);
      console.log('objjjj', object)
      dispatch(addColor(object));
    });
};


  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleEdit = () => {
    setEditMode(true);
    // Initialize editedData with the current user data
    setEditedData({
      username: userInfo.username,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
      number: userDataInfo.number,
      street: userDataInfo.street,
      postal: userDataInfo.postal,
      city: userDataInfo.city,
      country: userDataInfo.country,
      phone: userDataInfo.phone,
    });
  };

  const handleChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };


  const handleSave = () => {
    const userEdited = {
      user_id: userInfo.id,
      username: editedData.username,
      firstname: editedData.firstname,
      lastname: editedData.lastname,
      email: editedData.email,
      number: editedData.number,
      street: editedData.street,
      postal: editedData.postal,
      city: editedData.city,
      country: editedData.country,
      phone: editedData.phone,
    }
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/user/edit`,
userEdited
    ).then(() => {
      dispatch(userUpdate(userEdited))
      setUserInfo(userEdited)
    }

    )
    setEditMode(false);
  };
  

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
              <li>{editMode ? <input type="text" value={editedData.username} onChange={(e) => handleChange('username', e.target.value)} /> : toPascalCase(userInfo.username)}</li>
     
          {editMode ? (
            <>
            <li>
              <input type="text" value={editedData.firstname} onChange={(e) => handleChange('firstname', e.target.value)} />
           </li>  <li> <input type="text" value={editedData.lastname} onChange={(e) => handleChange('lastname', e.target.value)} />
             </li> <li><input type="text" value={editedData.email} onChange={(e) => handleChange('email', e.target.value)} />
           </li>   
           <li id="adress"> <input type="text" value={editedData.number} onChange={(e) => handleChange('number', e.target.value)} />
              <input type="text" value={editedData.street} onChange={(e) => handleChange('street', e.target.value)} />
              <input type="text" value={editedData.postal} onChange={(e) => handleChange('postal', e.target.value)} />
              <input type="text" value={editedData.city} onChange={(e) => handleChange('city', e.target.value)} />
              <input type="text" value={editedData.country} onChange={(e) => handleChange('country', e.target.value)} />
              </li>
             
            </>
          ) : (
            <>
            
            {userInfo.firstname} {userInfo.lastname}
          <li>{userInfo.email}</li>
                <li id="adress">{userDataInfo.number} {userDataInfo.street}, <br/>
                {userDataInfo.postal} {toPascalCase(userDataInfo.city)}, <br/>
                {(userDataInfo.country).toUpperCase()}</li>
                <li>{userDataInfo.phone}</li>
            </>
                 )} 
             
             <li>
          {editMode ? (

            <button id="edit-save" onClick={handleSave}>Save</button>
          ) : (
            <button id="edit-save" onClick={handleEdit}>Edit</button>
          )}
            </li>
  
              </ul>
            </div>
          </div>
<div className="user-activities">
          <div className="order-history"> No orders yet</div>
      
        <div className="saved-guitars"> 
        "Start tweaking your six strings now! "
        {/* <div className="guitars-all">
         { userGuitars == 150 ? 
          userGuitars.map((gtr, key) => <div className="guitar-thb" key={key} onClick={() => handleSelectGuitar(gtr.id_guitar)} value={gtr.id}>
      <a href="/">
    {/* { gtr.thumbnail &&(<img src={path + `${gtr.thumbnail}.png`} alt={`Guitar ${gtr.id_guitar}`} /> ) } }
          { gtr.id_guitar}
       
        </a>
        
          </div>)
      : "Start tweaking your six strings now! " } */}
 {/* </div> */}
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
