import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { FcTrademark } from 'react-icons/fc';
import { DiCodeigniter } from 'react-icons/di';

import { BiLoaderCircle ,BiCircle ,BiSolidCircleThreeQuarter} from 'react-icons/bi';

const StatusIconGenerator = ({ status }) => {
  let icon = null;

  switch (status) {
    case 'Backlog':
      icon = <BiLoaderCircle  color="black" />;
      break;
    case 'Todo':
      icon = <BiCircle  color="black" />;
      break;
    case 'In progress':
      icon = < BiSolidCircleThreeQuarter color="rgb(255, 87, 51)"  />
      break;
    case 'Completed':
      icon = <FaCheck  color="green" />;
      break;
   
  }

  return <div className="status-icon">{icon}</div>;
};

export default StatusIconGenerator;





// --- for todo --> FaRegCircle 