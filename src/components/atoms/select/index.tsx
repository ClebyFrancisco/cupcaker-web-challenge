import React from 'react'

import styles from './styles.module.scss'

interface InputProps {
  name: string
  options: {
    label: string
    value: {
      id: number
      name: string
      description: string
      price: number
    }
  }[]
  placeholder?: string
  setState: React.Dispatch<
    React.SetStateAction<{
      id: number
      name: string
      description: string
      price: number
    } | null>
  >
  error?: boolean
}

const Select = ({
  name,
  options,
  placeholder,
  setState,
  error,
}: InputProps): JSX.Element => {
  return (
    <div className={styles.containerSelect}>
      <label htmlFor={name}>{name[0].toUpperCase() + name.substr(1)}</label>
      <select
        style={{ borderColor: error ? 'var(--color-alert-red)' : '' }}
        onChange={i => {
          const foundValue = options.find(
            item => item.value.id.toString() == i.target.value
          )
          if (foundValue) {
            setState(foundValue.value)
          }
        }}
        id={name}
        name={name}
        defaultValue={placeholder}
      >
        <option disabled value={placeholder}>
          {placeholder}
        </option>
        {options.map(i => (
          <option key={i.label} value={i.value.id}>
            {i.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export { Select }
