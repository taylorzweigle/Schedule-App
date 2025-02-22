//Taylor Zweigle, 2024
import React, { forwardRef } from "react";

import Typography from "../typography/Typography";

const Tab = forwardRef(({ value, selected, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-row justify-center items-center h-12 w-full rounded-tl-lg rounded-tr-lg rounded-br-none rounded-bl-none border-b-4 md:hover:bg-slate-200 md:hover:dark:bg-slate-700 active:bg-slate-200 active:dark:bg-slate-700 ${
        selected ? "border-sky-500" : "border-transparent"
      } cursor-pointer`}
      onClick={onClick}
    >
      <Typography variant="body1" color={selected ? "primary" : "secondary"}>
        {value}
      </Typography>
    </div>
  );
});

export default Tab;
