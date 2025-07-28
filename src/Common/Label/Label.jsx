import React from 'react'

const Label = ({labelName}) => {
  return (
    <label
    className="block text-gray-200 text-sm font-medium mb-2"
  >
    {labelName}
  </label>
  )
}

export default Label