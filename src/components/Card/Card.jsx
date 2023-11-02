import React from 'react'
import './Card.css';
import { FaTimes, FaUserCircle } from 'react-icons/fa';
import { FcRegisteredTrademark, FcBusinessman } from "react-icons/fc";
import StatusIconGenerator from '../Header/StatusIconGenerator';
import UserIcon from './UserIcon';

const users = [
    'Anoop Sharma',

];



const Card = ({ id, title, tag, user, status }) => {
    console.log(user);
    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            <div className="cardHeading flex-sb ">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>

                    {/* <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLhAXbyvfG8mvwGRX_LcasbTqom1S5nVykQ&usqp=CAU" alt="UserImage" /> */}
                    {/* <FcBusinessman style={{width : "100%", height : "100%",  borderRadius : "50%" }}/> */}

                    <div style={{ width: "100%", height: "100%", borderRadius: "90%" }} >


                        <UserIcon userId={id} />
                        




                    </div>

                    <div className="showStatus"> </div>
                </div>
            </div><div className='status_align'>
            <StatusIconGenerator status={status} /> 
            <div className="cardTitle" style={{ fontWeight: 200 }} >
           
           <p>{title}</p>
       </div>

            </div>
          
            <div className="cardTags">
                <div className="tags color-grey"> ... </div>
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags color-grey"> <span ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg></span> {elem}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Card;
