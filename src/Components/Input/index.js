import React from "react";

function Input({
  label,
  type,
  placeholder,
  required,
  id,
  name,
  onChange,
  inputClassName,
  labelClassName,
  className,
  pattern,
  value,
  title
}) {
  return (
    <div className={` ${className ? className : ""} `}>
      <label
        for={id ? id : name}
        className={` ${
          labelClassName ? labelClassName : ""
        } block mb-1 text-sm font-["poppins-med"] font-medium text-dark `}
      >
        {label}
        <span className=" text-error ">{required ? "*" : ""}</span>
      </label>
      <input
        pattern={pattern}
        title={title}
        id={id ? id : name}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className={` ${
          inputClassName ? inputClassName : ""
        } bg-white border border-grey text-dark placeholder:text-placeholder text-sm rounded-[5px] focus:outline-none  block w-full font-["poppins-reg"] pl-3 py-2 `}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default Input;
