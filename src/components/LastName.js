import React from 'react'

const LastName = (props) => {
  return (
    <input
      type='text'
      name='lastName'
      placeholder='Enter Last Name'
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default LastName
