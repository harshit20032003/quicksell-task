import React from 'react';
import TicketLogo from '../small components/TicketLogo';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Usercard from './Usercard';
import '../styles/grid.css';

const TicketGrid = (props) => {
  const priorityOptions = {
    "No priority": 0,
    "Urgent": 4,
    "High": 3,
    "Medium": 2,
    "Low": 1
  };

  let userOptions = {};
  let userStatus = {};

  if (props.gridOptions["User"].length === props.userIds.length) {
    userOptions = props.gridOptions["User"].reduce((result, key, index) => {
      result[key] = props.userIds[index];
      return result;
    }, {});
  }

  if (props.userIds.length === props.userAvailablitiy.length) {
    userStatus = props.userIds.reduce((result, key, index) => {
      result[key] = props.userAvailablitiy[index];
      return result;
    }, {});
  }

  const sortStatus = (ticket) => ticket.status === props.title;
  const sortPriority = (ticket) => ticket.priority === priorityOptions[props.title];
  const sortUser = (ticket) => ticket.userId === userOptions[props.title];

  let filteredData = [1];

  if (props.ticketData.tickets) {
    if (props.selectedGroupOption === "Status") {
      filteredData = props.ticketData.tickets.filter(sortStatus);
    } else if (props.selectedGroupOption === "User") {
      filteredData = props.ticketData.tickets.filter(sortUser);
    } else if (props.selectedGroupOption === "Priority") {
      filteredData = props.ticketData.tickets.filter(sortPriority);
    }

    if (props.selectedOrderOption === "Priority") {
      filteredData = [...filteredData].sort((a, b) => b.priority - a.priority);
    } else if (props.selectedOrderOption === "Title") {
      filteredData = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  return (
    <>
      <div className='grid-container'>
        <div className='grid-header'>
          {props.selectedGroupOption === "User" ? (
            <div className='profile-photo'>
              <div className='profile-status' style={{ backgroundColor: `${userStatus[userOptions[props.title]] ? "green" : "#dfe1e4"}`}}></div>
            </div>
          ) : (
            <TicketLogo fill={priorityOptions[props.title] === 4 ? "#fc7840" : "black"} status={props.title} priority={priorityOptions[props.title]} />
          )}
          <div style={{ fontWeight: "500" }}>{props.title}</div>
          <div style={{ position: "relative", left: "15px"}}>{filteredData.length}</div>
          <AiOutlinePlus className='btn btn-plus'/>
          <BiDotsHorizontalRounded className='btn btn-dots' />
        </div>
        {filteredData.map((data, i) => (
          <Usercard userStatus={userStatus} data={data} key={i} selectedGroupOption={props.selectedGroupOption} />
        ))}
      </div>
    </>
  );
};

export default TicketGrid;