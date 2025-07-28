import React from "react";

const PasswordInput = ({
  type,
  handleChangeInput,
  valueName,
  idName,
  inputName,
  placeholderName,
  autoCompleteName,
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
      type={type}
      name={inputName}
      required
      placeholder={placeholderName}
      onChange={handleChangeInput}
      value={valueName}
      autoComplete={autoCompleteName}
    />
  );
};

export default PasswordInput;
