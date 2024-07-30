import { Flex } from "antd";
import React, { HTMLAttributes } from "react";
import { cn } from "../utils/helpers";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Section: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Flex
        {...props}
        vertical
        justify="center"
        align="center"
        className={cn("h-screen", props.className)}
      >
        {props.children}
      </Flex>
    </>
  );
};

export default Section;
