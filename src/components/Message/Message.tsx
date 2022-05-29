import React from "react";
import cn from "classnames";
import styles from "./Message.module.scss";

interface Props {
  text: string;
  className?: string;
}

export const Message: React.FC<Props> = ({ text, className }) => {
  return <span className={cn(styles.message, className)}>{text}</span>;
};
