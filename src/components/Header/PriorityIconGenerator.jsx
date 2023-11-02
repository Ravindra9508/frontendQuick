import React from 'react';
import { FaExclamation, FaExclamationCircle } from 'react-icons/fa';
import {FiMoreHorizontal } from 'react-icons/fi';
import {FcHighPriority } from 'react-icons/fc';
import {BiSignal2,BiSignal3,BiSignal4} from 'react-icons/bi';


const PriorityIconGenerator = ({ priority }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "No priority":
        return <FiMoreHorizontal size={20} color="gray" />;
      case "Low":
        return <BiSignal2 size={20} color="gray" />;
      case "Medium":
        return <BiSignal3 size={20}  color="gray"/>;
      case "High":
        return <BiSignal4 size={20} color="gray" />;
      case "Urgent":
        return <FcHighPriority size={20} color="gray" />;
      default:
        return null;
    }
  };

  const priorityIcon = getPriorityIcon(priority);

  return (
    <div className="priority-icon">
      {priorityIcon}
    </div>
  );
};

export default PriorityIconGenerator;
