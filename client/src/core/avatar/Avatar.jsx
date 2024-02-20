//Taylor Zweigle, 2024
import React from "react";

const Avatar = ({ image, user }) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-600 min-w-12 min-h-12 size-12 rounded-full">
      <img className="min-w-12 min-h-12 size-12 rounded-full" src={image} alt={user} />
    </div>
  );
};

export default Avatar;
