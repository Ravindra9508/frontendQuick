import React from "react";
import { useSelector } from "react-redux";
// import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import { FiAlertCircle } from 'react-icons/fi';
import { FaUser, FaUserSlash } from 'react-icons/fa';
import { FcServiceMark } from "react-icons/fc";
import { BiLoaderCircle } from "react-icons/bi";
import { FaExclamation, FaExclamationCircle } from 'react-icons/fa';
import { DiCodeigniter } from 'react-icons/di';
import "./DashView.css";
import Card from "../Card/Card";
import UserIcon from "../Header/UserIcon";

import PriorityIconGenerator from "../Header/PriorityIconGenerator";
import StatusIconGenerator from "../Header/StatusIconGenerator";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  const groupvalue = localStorage.getItem("group");
  const grouppriority = localStorage.getItem("order");
  // console.log(selectedData);
  // console.log(user)




  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>

        {selectedData.map((elem, index) => {

          return (

            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb ">
                  <div className="leftView">
                    {groupvalue !== 'user' ? (



                      <>

                        {groupvalue === 'priority' ?

                          <div
                            className="imageContainer relative"
                            style={{ width: "15px", height: "15px", display: 'inline-block' }}
                          >

                            <PriorityIconGenerator priority={elem[index]?.title} />


                          </div> :
                          <div
                            className="imageContainer relative"
                            style={{ width: "15px", height: "15px", display: 'inline-block' }}
                          >

                            <StatusIconGenerator status={elem[index]?.title} />


                          </div>



                        }
                      </>


                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display: 'inline-block' }}
                        >


                          <UserIcon user={elem[index]?.title} />


                        </div>

                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title}
                    </span>
                  </div>

                  <div class="rightView"><div class="icon-wrapper"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></div><div class="icon-wrapper"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg></div></div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card
                        id={elem.id}
                        title={elem.title}
                        tag={elem.tag}
                        user={elem[index]?.value}
                        status={elem.status}
                      />
                    );

                  })}
                </div>
              </div>
            </>
          );
        })}
        {groupvalue === 'status' ?
          <>

            <div className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div class="leftView"><div class="icon-wrapper"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(56, 75, 181)" }} ><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg></div></div><span class="status">Done</span><span style={{ color: "gray" }}>0</span></div>
                <div class="rightView"><div class="icon-wrapper"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></div><div class="icon-wrapper"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg></div></div>
              </div>
              <div className="dashList flex-gap-10">

              </div>
            </div>
            <div className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div class="leftView"><div class="icon-wrapper"><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L12 10.939Z"></path></svg></div></div><span class="status">Cancelled</span><span style={{ color: "gray" }}>0</span></div>
                <div class="rightView"><div class="icon-wrapper"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></div><div class="icon-wrapper"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg></div></div>
              </div>
              <div className="dashList flex-gap-10">

              </div>
            </div>







          </> : null
        }





      </div>
    )
  );
};

export default DashView;




