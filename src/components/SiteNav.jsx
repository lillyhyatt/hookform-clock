import React from 'react'
import { NavLink } from 'react-router-dom'


function SiteNav() {
  return (
    <>
    <nav>
<NavLink to={`/`} style={{padding: "0.5em"}}>Form</NavLink>
<NavLink to={`/clock`} style={{padding: "0.5em"}} >Clock</NavLink>
    </nav>
    </>
  )
}

export default SiteNav