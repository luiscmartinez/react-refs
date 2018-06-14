import React from 'react'

const FirstName = (props) => {
  return (
    <input
      type='text'
      placeholder='Enter First Name'
      name='firstName'
      value={props.value}
      onChange={props.onChange}
    />
  )
}
export default FirstName
