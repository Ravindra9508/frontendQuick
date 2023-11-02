import React from 'react';
import { FaUser, FaUserSlash } from 'react-icons/fa';
import { FcClearFilters, FcRegisteredTrademark, FcServiceMark } from 'react-icons/fc';

const UserIcon = ({ user }) => {
  // Map user names to their respective icons
  const userIcons = {
    'Anoop sharma':<div  style={{ width: "15px", height: "15px", display: 'flex', justifyContent:'center',alignItems:'center',backgroundColor:'brown',color:'white', borderRadius:'50%', fontSize:'10px'}}>
      <span>AS</span>
    </div>,
    'Yogesh': <div  style={{ width: "15px", height: "15px", display: 'flex', justifyContent:'center',alignItems:'center',backgroundColor: 'rgb(255, 87, 51)',color:'white',borderRadius:'50%', fontSize:'10px'}}>
    <span>Y</span>
  </div>,
    'Suresh': <div  style={{ width: "15px", height: "15px", display: 'flex', justifyContent:'center',alignItems:'center',backgroundColor:'green',color:'white',borderRadius:'50%', fontSize:'10px'}}>
    <span>S</span>
  </div>,
    'Shankar Kumar':<div  style={{ width: "15px", height: "15px", display: 'flex', justifyContent:'center',alignItems:'center',backgroundColor:'red',color:'white',borderRadius:'50%', fontSize:'10px'}}>
    <span>SK</span>
  </div>,
    'Ramesh':<div  style={{ width: "15px", height: "15px", display: 'flex', justifyContent:'center',alignItems:'center',backgroundColor:'rgb(144, 12, 63)',color:'white',borderRadius:'50%', fontSize:'10px'}}>
    <span>R</span>
  </div>,
  };

  return (
    <div className="user-icon">
      
      {user && userIcons[user] ? userIcons[user] : null}
    </div>
  );
};

export default UserIcon;

// for anup sharma --->SiAssemblyscript 
//for yogesh --->FcClearFilters
//for r ----> FcRegisteredTrademark
 //for suresh ---> FcServiceMark
 // for shashkar kumar -- FcServiceMark but change the color 

