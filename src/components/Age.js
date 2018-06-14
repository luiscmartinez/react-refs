import React from 'react'

const Age = (props) => {
  return (
    <input
      type='text'
      placeholder='Enter Age'
      name='age'
      value={props.value}
      onChange={props.onChange}
    />
  )
}
export default Age
