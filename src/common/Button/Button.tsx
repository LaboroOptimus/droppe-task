import * as React from "react";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ text, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);
