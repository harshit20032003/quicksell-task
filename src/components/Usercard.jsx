import React from 'react';
import '../styles/card.css';
import { BsCircleFill } from 'react-icons/bs';
import TicketLogo from '../small components/TicketLogo';

const Usercard = (props) => {
  return (
    <>
      <div className='card-frame'>
        <div style={{ display: "flex" }}>
          <div className='user-id'>{props.data.id}</div>
          {props.selectedGroupOption === "User" ? (
            <div style={{ height: "25px", width: "25px" }}></div>
          ) : (
            <div style={{ marginLeft: "auto",position:"relative",left:"5px" }} className='profile-photo'>
              <div className='profile-status' style={{ backgroundColor: `${props.userStatus[props.data.userId] ? "green" : "#dfe1e4"}` }}></div>
            </div>
          )}
        </div>
        <div className='ticket-logo'>
          <div>{props.selectedGroupOption === "Status" ? (<></>) : (<TicketLogo fontSize={`${props.data.status === "Todo" ? "16px" : "20px"}`} status={props.data.status} />)}</div>
          <div style={{ position: "relative", bottom: `${props.data.status !== "Todo" ? "-2px" : "2px"}`, maxWidth: "90%" }}>{props.data.title}</div>
        </div>
        <div className='priority-tag'>
          {props.selectedGroupOption === "Priority" ? (<></>) : (<TicketLogo fontSize={"15px"} priority={props.data.priority} fill={"#a7aaae"} border={"1px solid rgb(0,0,0,0.1)"} />)}
          {Array.isArray(props.data.tag) && props.data.tag.some(tag => tag.toLowerCase() === "feature request") ? (
            <div className='feature-tag'>
              <div style={{ fontSize: "12px" }}>
                <BsCircleFill style={{ position: "relative", top: "2px", marginRight: "7px", color: "#bec2c8" }} />
                <span style={{ color: "#a7aaae" }}>Feature Request</span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Usercard;