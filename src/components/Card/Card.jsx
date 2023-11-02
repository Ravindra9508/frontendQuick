import React from 'react';
import './Card.css';
import { FaTimes, FaUserCircle } from 'react-icons/fa';
import { FcRegisteredTrademark, FcBusinessman } from "react-icons/fc";
import StatusIconGenerator from '../Header/StatusIconGenerator';
import PriorityIconGenerator from '../Header/PriorityIconGenerator';
import UserIcon from './UserIcon';



const Card = ({ id, title, tag, user, status,priority }) => {
    console.log(priority);
    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            <div className="cardHeading flex-sb ">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                <div className="imageContainer relative" style={{ width: "29px", height: "22px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "30px", // Adjust the width as needed
                                height: "30px", // Adjust the height as needed
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center", // Vertically center the content
                                justifyContent: "center", // Horizontally center the content
                            }}
                        >
                            <UserIcon userId={id} />
                            <div className="showStatus"></div> {/* Move this inside the user icon container */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='status_align'>
                <StatusIconGenerator status={status} />
                <div className="cardTitle" style={{ fontWeight: 150 }}>
                    <p>{title}</p>
                </div>
            </div>
            <div className="cardTags">
                <div className="tags color-grey"> 
                <PriorityIconGenerator priority={priority} />
                ... </div>
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags color-grey"> <span ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg></span> {elem}</div>
                    })
                }
            </div>
        </div>
    );
}

export default Card;
