import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/TopNav/TopNav';

import DashView from './components/DashBoard/DashView';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';


const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
     <div >
     <TopNav/>
      {/* <hr style={{marginTop : "10px"}} /> */}
     

      <DashView/>
     </div>
    </div>
  ) : null
}

export default App