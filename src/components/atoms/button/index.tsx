import React from "react";
import styles from "./styles.module.scss"
interface ButtonProps {
    text: string;
    onclick: () => void;
}


const Button = ({text, onclick}:ButtonProps): JSX.Element => {
  return(
      <button 
      className={styles.button}
      onClick={onclick}
      >
      {text}
  </button>
  )
}

export { Button }