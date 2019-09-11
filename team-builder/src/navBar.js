  
import React from 'react'
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <NavLink to='/' ClassName="active">Home</NavLink>
      <NavLink to='/form' ClassName="active">Add Member</NavLink>
    </div>
  )
}

export default Navigation