import React, { useState } from 'react';
import '../styles/navbar.css';
import { VscSettings } from 'react-icons/vsc';
import { FaAngleDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {updateGroupState,updateOrderState} from "../redux-slice/dropDownStateSlice.js"
const Navbar = () => {
  const dispatch = useDispatch();
  const [dropdownState, setDropdownState] = useState(false);
  const [groupselection,groupselectionState]=useState(false)  
  const [orderselection,orderselectionState]=useState(false)  
  const group=useSelector((state) => state.dropDownState.groupState)
  const order=useSelector((state) => state.dropDownState.orderState)


const handleUserGroupSelect=(e)=>{
dispatch(updateGroupState(e.target.innerText))
localStorage.setItem("groupValue",e.target.innerText);
groupselectionState(false)
setDropdownState(false)
}
const handleUserOrderSelect=(e)=>{
  dispatch(updateOrderState(e.target.innerText))
  localStorage.setItem("orderValue",e.target.innerText);
  orderselectionState(false)
  setDropdownState(false)
  }


  return (
    <>
      <div   onClick={() =>{ setDropdownState(!dropdownState)}} style={{ display: 'flex', margin: '2% 0% 2% 2%',width:"fit-content" }}>
        <div className='drop-down'>
          <VscSettings />
          <div style={{ position: 'relative', bottom: '1px' }}>Display</div>
          <FaAngleDown className='drop-down-arrow' style={{ position: 'relative', top: '1px', opacity: '0.6' }} />
        </div>
      </div>
      {dropdownState && (
        <div className='drop-down-menu'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>Grouping</div>
            <div onClick={()=>{groupselectionState(!groupselection)}} className='drop-down' style={{ height: '27px', width: '100px', boxShadow: 'none' }}>
              
              <div>{group}</div>
              <FaAngleDown style={{ position: 'relative', top: '1px', opacity: '0.4' }} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div >Ordering</div>
            <div onClick={()=>{orderselectionState(!orderselection)}} className='drop-down' style={{ height: '27px', width: '100px', boxShadow: 'none' }}>
              <div>{order}</div>
              <FaAngleDown style={{ position: 'relative', top: '1px', opacity: '0.4' }} />
              
            </div>
            {groupselection&&(<div className='drop-down-select'><div  onClick={(e)=>{handleUserGroupSelect(e)}}>Status</div><div onClick={(e)=>{handleUserGroupSelect(e)}}>User</div><div onClick={(e)=>{handleUserGroupSelect(e)}}>Priority</div></div>)}
            {orderselection&&(<div className='drop-down-select' style={{top:"90px",zIndex:"9",height:"50px"}}><div onClick={(e)=>{handleUserOrderSelect(e)}} >Priority</div><div onClick={(e)=>{handleUserOrderSelect(e)}}>Title</div></div>)}
          </div>
          
        </div>
      )}
    </>
  );
};

export default Navbar;
