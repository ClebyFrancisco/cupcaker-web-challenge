import React from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  text: string
  onclick?: () => void
}

const Button = ({ text, onclick, type }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} onClick={onclick} type={type}>
      {text}
    </button>
  )
}

export { Button }
