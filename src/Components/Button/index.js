import React from "react";

function Button(props) {
  const { variant, type, text, className, onClick } = props;
  const borderedButtonClassName =
    " text-primary border-solid border border-primary ";
  const solidButtonClassName =
    " shadow-[0px,1px,2px,rgba(0,0,0,0.05)] bg-primary text-white ";
  return (
    <button
      type={type}
      onClick={onClick}
      className={` rounded-md font-["poppins-reg"] text-base font-medium capitalize px-4 py-2 ${
        className ? className : ""
      } ${
        variant === "bordered" ? borderedButtonClassName : solidButtonClassName
      } `}
    >
      {text}
    </button>
  );
}

export default Button;
