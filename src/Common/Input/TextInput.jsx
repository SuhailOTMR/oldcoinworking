import React from "react";

const TextInput = ({
  handleChangeInput,
  valueName,
  handleKeyDownInput,
  idName,
  inputName,
  placeholderName,
  disabled,
  isEditable,
}) => {
  return (
    <input
      className={`appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-200 ${
        typeof isEditable !== "undefined" && !isEditable
          ? "opacity-50 cursor-not-allowed"
          : ""
      }`}
      id={idName}
      name={inputName}
      type="text"
      required
      placeholder={placeholderName}
      onChange={handleChangeInput}
      value={valueName}
      onKeyDown={handleKeyDownInput}
      disabled={disabled}
    />
  );
};

export default TextInput;
