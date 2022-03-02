import React from 'react'

//import { FieldError } from 'react-hook-form'
import styles from './styles.module.scss'

interface InputProps {
  name: string
  disabled?: boolean | undefined
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  error?: boolean
}

const Input = ({
  name,
  disabled,
  value,
  onChange,
  error,
}: InputProps): JSX.Element => {
  return (
    <div className={styles.containerInput}>
      <label
        htmlFor={name}
        style={{
          color: disabled
            ? 'var(--color-gray-light)'
            : 'var(--color-gray-dark)',
        }}
      >
        {name[0].toUpperCase() + name.substr(1)}
      </label>
      <input
        name={name}
        style={{
          borderColor: disabled
            ? 'var(--color-gray-light)'
            : error
            ? 'var(--color-alert-red)'
            : 'var(--color-gray-dark)',
        }}
        onChange={onChange}
        id={name}
        className={styles.input}
        type="text"
        disabled={disabled}
        value={value}
      />
    </div>
  )
}

export { Input }
