import React, { FC } from "react";
import classnames from "classnames";

type Div = {
  className: string;
  children: any;
};

const Flex: FC<Div> = ({ className, children }) => {
  console.log(className);
  return <div className={classnames("flex", className)}>{children}</div>;
};

export default Flex;
