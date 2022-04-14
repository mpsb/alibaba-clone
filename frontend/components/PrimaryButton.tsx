import React, { FC } from "react";

type Button = {
  children: string;
};

const PrimaryButton: FC<Button> = ({ children }) => {
  return (
    <button className="bg-blue-800 rounded-full hover:bg-blue-500 px-8 py-2 mx-2">
      <span className="text-white">{children}</span>
    </button>
  );
};

export default PrimaryButton;
