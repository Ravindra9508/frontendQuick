import React from 'react';
import UserIcon from './UserIcon'; // Import your UserIcon component
import PriorityIconGenerator from './PriorityIconGenerator'; // Import your PriorityIconGenerator component
import StatusIconGenerator from './StatusIconGenerator'; // Import your StatusIconGenerator component

const PriorityGenerator = ({ displayState, priority, status, users, tickets }) => {
  let iconToDisplay = null;
  let heading = null;
  console.log("hiii=====");

  if (displayState === 'user' && Array.isArray(users)) {
    const user = users.find((user) => user.id === tickets[0]?.userId);
    iconToDisplay = <UserIcon user={user} />;
    heading = user?.name;
  } else if (displayState === 'priority') {
    iconToDisplay = <PriorityIconGenerator priority={priority} />;
    if (priority === 0) {
      heading = 'No Priority';
    } else if (Number(priority) === 1) {
      heading = 'Low';
    } else if (Number(priority) === 2) {
      heading = 'Medium';
    } else if (Number(priority) === 3) {
      heading = 'High';
    } else if (Number(priority) === 4) {
      heading = 'Urgent';
    }
  } else if (displayState === 'status') {
    iconToDisplay = <StatusIconGenerator status={status} />;
    heading = status;
  }

  return (
    <div className="priority-generator">
      <div className="icon">{iconToDisplay}</div>
      <div className="heading">{heading}</div>
      
    </div>
  );
};

export default PriorityGenerator;


