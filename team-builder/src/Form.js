import React, { useState } from 'react';

function Form() {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
    location: '',
  })

  const handleChange = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  } 

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <h1>Fill in the blanks</h1>
        <label>
          <input type="text" name="name" value={member.name} placeholder="Name..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="email" value={member.email} placeholder="Email..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="role" value={member.role} placeholder="Role..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="location" placeholder="Location..." value={member.location} onChange={event => handleChange(event)} />
        </label>
        <button className="enter">Submit</button>
    </form>
    </div>
  )
}

export default Form;