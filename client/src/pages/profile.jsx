import React,{useContext} from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import "../styles/profile.css"
const Profile = ()=>{
const {user,setUser}= useContext(AppContext);
const navigate=useNavigate();
if(user){
  return (

    <div className="profile-box">
    <div className="profile-image"> {user.displayName}</div>
    <div className="profile-info">
      <span className="display-name"><b>UserName : </b> {user.displayName}</span>
      <br></br>
      <span className="email"><b>Email : </b>{user.email}</span>
    </div>
  </div>
  );
}
else
{
   window.alert("Login to view your profile");
   navigate("/");
}
}
export default Profile;
