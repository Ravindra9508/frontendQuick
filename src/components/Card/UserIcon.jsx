import React from 'react';

const UserIcon = ({ userId }) => {
  const userMappings = {
    'CAM-1': { icon: 'Y', backgroundColor: 'brown' },
    'CAM-2': { icon: 'R', backgroundColor: 'green' },
    'CAM-3': { icon: 'Z', backgroundColor: 'red' },
    'CAM-4': { icon: 'AS', backgroundColor: 'yellow' },
    'CAM-5': { icon: 'B', backgroundColor: 'purple' },
    'CAM-6': { icon: 'CK', backgroundColor: 'orange' },
    'CAM-7': { icon: 'SK', backgroundColor: 'pink' },
    'CAM-8': { icon: 'E', backgroundColor: 'rgb(255, 87, 51)' },
    'CAM-9': { icon: 'FK', backgroundColor: 'violet' },
    'CAM-10': { icon: 'G', backgroundColor: 'cyan' },



    
  };

  const userIconData = userMappings[userId] || generateRandomUserIcon();

  function generateRandomUserIcon() {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIcon = possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
    const randomColor = getRandomColor();
    return { icon: randomIcon, backgroundColor: randomColor };
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="user-icon" style={{ backgroundColor: userIconData.backgroundColor }}>
      {userIconData.icon}
    </div>
  );
};

export default UserIcon;


