import React from "react";

export default function Burger({ open, setOpen }) {
  return (
    <button
      className={`menu-button md:hidden z-10 relative w-8 +  ${
        open ? "text-offWhite" : "text-black"
      }`}
      onClick={setOpen}>
      <span
        aria-hidden="true"
        className={` block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
          open ? `rotate-45` : `-translate-y-1.5`
        }`}></span>
      <span
        aria-hidden="true"
        className={` block absolute h-0.5 w-full  bg-current transform transition duration-500 ease-in-out  ${
          open ? `opacity-0` : `null`
        }`}></span>
      <span
        aria-hidden="true"
        className={` block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out  ${
          open ? `-rotate-45` : `translate-y-1.5`
        }`}></span>
    </button>
  );
}
