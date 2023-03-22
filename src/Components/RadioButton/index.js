import React from "react";

function RadioButton({
  className,
  name,
  id,
  value,
  checked,
  onChange,
  label,
  labelClassName,
  inputClassName,
}) {
  return (
    <div className={` flex items-center ${className ? className : ""}`}  >
      <input
        checked={checked}
        id={id ? id : name}
        type="radio"
        value={value}
        onChange={onChange}
        name={name}
        className={` ${inputClassName?inputClassName:""} w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  `}
      />
      <label
        for={id ? id : name}
        className={` ${labelClassName?labelClassName:""} text-placeholder text-sm font-["poppins-reg"] pl-1 `}
      >
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
