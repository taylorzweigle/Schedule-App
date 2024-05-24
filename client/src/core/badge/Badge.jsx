//Taylor Zweigle, 2024
import React from "react";

const Badge = ({ size }) => {
  let sizeClass = "";
  let rippleClass = "";

  switch (size) {
    case "small":
      sizeClass = "w-3 h-3";
      rippleClass = "-m-1";
      break;
    case "large":
      sizeClass = "w-4 h-4";
      rippleClass = "-m-2";
      break;
    default:
      sizeClass = "w-3 h-3 -m-1";
      rippleClass = "-m-1";
      break;
  }

  return (
    <span className={`absolute right-0 top-0 flex ${sizeClass} ${rippleClass}`}>
      <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-rose-800 dark:bg-rose-200 opacity-75"></span>
      <span className={`relative inline-flex rounded-full ${sizeClass} bg-rose-400 dark:bg-rose-500`}></span>
    </span>
  );
};

export default Badge;
