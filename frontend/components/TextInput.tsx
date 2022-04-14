import React, { FC } from "react";
import classnames from "classnames";

type Input = {
  className?: string;
  placeholder?: string;
};

const TextInput: FC<Input> = ({ className, placeholder }) => {
  return (
    <input
      className={classnames(
        "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
        className
      )}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default TextInput;
