import React from 'react'

const TextareaInput = ({handleChangeInput, valueName, idName, inputName, placeholderName}) => {
  return (
      <textarea
        className="flex shrink-0 mt-2.5 rounded-lg border border-white border-solid h-[121px] w-full bg-transparent text-white p-3"
        name={inputName}
        placeholder={placeholderName}
        value={valueName}
        onChange={handleChangeInput}
      />
  )
}

export default TextareaInput