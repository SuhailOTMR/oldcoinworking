import React from 'react'

const NumberInput = ({handleChangeInput, valueName, idName, inputName, placeholderName}) => {
  return (
    <input
    className="appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-200 border-black-700"
    id={idName}
    type="number"
    name={inputName}
    required
    placeholder={placeholderName}
    onChange={handleChangeInput}
    value={valueName}
  />
  )
}

export default NumberInput