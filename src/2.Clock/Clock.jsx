import { useState, useEffect } from "react";
import './clock.css'

function Clock(){

  const [currentTime, setCurrentTime]=useState(new Date());
  

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentTime(new Date());
    },1000);
    return()=> clearInterval(interval);
  },[])
  
  const updatedTime=currentTime.toLocaleTimeString();
  return( <div className='clock'>
            <span>{updatedTime}</span>
          </div>)
}

export default Clock;