import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import { FiChevronDown } from 'react-icons/fi';
import "./TopNav.css";
import { useDispatch, useSelector} from "react-redux";
import { selectData } from "../../Actions/DataAction";

const getGroup = () => {
  // console.log(localStorage.getItem("group"));

  if(localStorage.getItem("group")){
    return localStorage.getItem("group");
  }else{
    return "status";
  }
}

const getOrder = () => {
  if(localStorage.getItem("order")){
    return localStorage.getItem("order");
  }else{
    return "priority";
  }
}
const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const {allTickets, allUser} = useSelector(state => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if(valueBool){
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    }else{
      setOrderValue(e.target.value);
    setDisplayOnClick(!displayOnClick);
    localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if(groupValue === 'user'){
      dispatch(selectData(groupValue, {
        allTickets, allUser
      }, orderValue))
    }else{
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);
 
  
  return (
    <div className="top-header" style={{paddingLeft : "10px"}}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          {" "}
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" 
          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"></path></svg> Display
       
      <span className="
      drop-down"><FiChevronDown /></span>
   
        </button>
        {displayOnClick && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-sb">
                <span>Grouping</span>
                <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle" name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span>Ordering</span>
                <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
        <div>

        </div>
      </div>
     
    </div>
  );
};

export default TopNav;
