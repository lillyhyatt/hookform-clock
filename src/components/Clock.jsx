import React, { useState } from 'react'
import { useEffect } from 'react';


function Clock() {

  const [dt, setDt] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
      let secTimer = setInterval( () => {
        setDt(new Date().toLocaleTimeString())
      },1000)
  
      return () => clearInterval(secTimer);
  }, []);


  return (
    <div>{dt}</div>
  )
}


export default Clock


{/* A page which displays the time by creating a new date in state and then:
Displaying it in the correct format for the user
Having a clock component that takes in that date and a locale and formats
 it to that locale
[BONUS POINTS} Make the clock tick. (So you’ll need to use a timer. 
Think about when you can use a timer in a react component) */}
