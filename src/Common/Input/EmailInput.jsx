import React from "react";

const EmailInput = ({
  handleChangeInput,
  valueName,
  idName,
  inputName,
  placeholderName,
  defaultValueName,
  disabled,
  isEditable, // Prop from parent
}) => {
  return (
    <input
      className={`appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-200 ${
        typeof isEditable !== "undefined" && !isEditable ? "opacity-50 cursor-not-allowed" : ""
      }`}
      id={idName}
      type="email"
      name={inputName}
      required
      placeholder={placeholderName}
      onChange={handleChangeInput}
      value={valueName}
      defaultValue={defaultValueName}
      autoComplete="off"
      disabled={disabled}
    />
  );
};

export default EmailInput;
