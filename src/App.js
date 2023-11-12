import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import TicketGrid from "./components/TicketGrid";
import './styles/grid.css'
import { setRawData } from "./redux-slice/dataSlice";
import { useEffect, useState } from "react";
import axios from 'axios'
function App() {

  const dispatch = useDispatch();
  const [dataLoaded,setDataLoaded]=useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        const data = response.data;
        dispatch(setRawData(data));
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
  const ticketData=useSelector((state)=>state.data.rawData)
  const selectedGroupOption = useSelector((state) => state.dropDownState.groupState);
  const selectedOrderOption=useSelector((state)=>state.dropDownState.orderState)
  let gridOptions=0;
  let userIds=0;
  let userAvailablitiy=0;
  
if(dataLoaded===true){ 
  gridOptions = {
    "Status": ["Backlog", "Todo", "In progress", "Done", "Canceled"],
    "User": Object.values(ticketData.users).map(user => user.name),
    "Priority": ["No priority", "Urgent", "High", "Medium", "Low"]
  };
  userIds=Object.values(ticketData.users).map(user=>user.id)
  userAvailablitiy=Object.values(ticketData.users).map(user=>user.available)
}
return (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <div className="ticket-grid" style={{ paddingTop: "2%", backgroundColor: "#f4f5f8", flex: "1", paddingBottom: "15%" }}>
      {dataLoaded && 
        gridOptions[selectedGroupOption].map((gridOption) => {
          return (
            <TicketGrid
              userAvailablitiy={userAvailablitiy}
              userIds={userIds}
              ticketData={ticketData}
              title={gridOption}
              selectedGroupOption={selectedGroupOption}
              key={gridOption}
              gridOptions={gridOptions}
              selectedOrderOption={selectedOrderOption}
            />
          );
        })}
    </div>
  </div>
);

 }
  

export default App;
