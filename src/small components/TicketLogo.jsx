import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {TbAlertSquareFilled,TbCircleDotted} from 'react-icons/tb'
import {MdSignalCellularAlt,MdSignalCellularAlt2Bar,MdSignalCellularAlt1Bar } from 'react-icons/md'
import {BsFillCheckCircleFill,BsCircle} from 'react-icons/bs'
import {PiClockCountdownBold} from 'react-icons/pi'
import {AiFillCloseCircle} from 'react-icons/ai'
const TicketLogo = (props) => {
  return (<>
  <div style={{border:`${props.border}`,fontSize:`${props.fontSize?props.fontSize:"22px"}`,borderRadius:"7px",position:"relative",top:"1px",width:"28px",height:"20px"}}>
    {props.priority===0?(<BsThreeDots style={{opacity:`0.6`,height:"min-content",padding:"1px 1px 1px 5px",position:"relative",top:"3px",left:"1px",color:`${props.fill}`}} />):(<div></div>)}
    {props.priority===4?(<TbAlertSquareFilled style={{opacity:`${props.fill?"1":"0.6"}`,height:"min-content",padding:"1px 1px 1px 5px",position:"relative",top:"2px",left:"1px",color:`${props.fill}`}} />):(<div></div>)}
    {props.priority===1?(<MdSignalCellularAlt1Bar style={{opacity:`0.6`,height:"min-content",padding:"1px 1px 1px 5px",color:`${props.fill}`}} />):(<div></div>)}
    {props.priority===2?(<MdSignalCellularAlt2Bar style={{opacity:`0.6`,height:"min-content",padding:"1px 1px 1px 5px",color:`${props.fill}`}} />):(<div></div>)}
    {props.priority===3?(<MdSignalCellularAlt style={{opacity:`0.6`,height:"min-content",padding:"1px 1px 1px 5px",position:"relative",top:"1px",color:`${props.fill}`}} />):(<div></div>)}
    {
        props.status?( <div style={{border:`${props.border}`,fontSize:`${props.fontSize?props.fontSize:"22px"}`,borderRadius:"7px",position:"relative",top:"4px",width:"28px",height:"20px"}}>
            {props.status.toLowerCase() === "in progress" ? (<PiClockCountdownBold style={{ fontSize: `${props.fontSize?props.fontSize:"22px"}`,position:"relative",bottom:"3px",fill:"#f0c947" }} />) : (<div></div>)}
        {props.status.toLowerCase() === "todo" ? (<BsCircle style={{ fontSize: `${props.fontSize?props.fontSize:"18px"}`,position:"relative",bottom:"5px",strokeWidth:"2%",stroke:"#ececec",left:"2px" }} />) : (<div></div>)}
        {props.status.toLowerCase() === "backlog" ? (<TbCircleDotted style={{ fontSize: `${props.fontSize?props.fontSize:"22px"}`,position:"relative",bottom:"3px",fill:"#ececec"  }} />) : (<div></div>)}
        {props.status.toLowerCase() === "done" ? (<BsFillCheckCircleFill style={{ fontSize: `${props.fontSize?props.fontSize:"18px"}`,position:"relative",bottom:"5px",fill:"#5e6ad2",left:"2px" }} />) : (<div></div>)}
        {props.status.toLowerCase() === "canceled" ? (<AiFillCloseCircle style={{ fontSize: `${props.fontSize?props.fontSize:"22px"}`,position:"relative",bottom:"5px",fill:"#94a2b3",top:"-3px"  }} />) : (<div></div>)}
            </div>):(<div></div>)
    }  
  </div>
  
 
  </>
   
  )
}

export default TicketLogo