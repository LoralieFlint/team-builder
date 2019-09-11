
import React from 'react';

function TeamComponent({teamList}) {
  return (
    <div>
      {teamList.map(member => (
        <div key={member.name} className='memberBox'>
         <h1 className='memberHeader'>Team Member</h1>         
         <h2 className='memberName'> {member.name} </h2>
         <h2 className='memberEmail'> {member.email} </h2>
         <h2 className='memberRole'> {member.role} </h2>
         <h2 className='memberLocation'> {member.location} </h2>
        </div>
      ))}
    </div>
  )
}




export default TeamComponent;