import React, { useEffect } from "react";

const Modal = ({ handleClose, show, children, className }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <>
      {show && (
        <>
          <section
            className=" fixed bg-[#000000a6] z-10 top-0 right-0 bottom-0 left-0 h-full w-full "
            onClick={handleClose}
          ></section>
          <section
            className={` ${
              className ? className : ""
            } fixed bg-white z-20  left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-[10px]  border-grey border-solid border p-8 max-w-[577px] w-full h-full max-h-[564px] `}
          >
            {children}
          </section>
        </>
      )}
    </>
  );
};

export default Modal;
