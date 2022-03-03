import React from 'react'

import { InitialLetter, Typography, TypographyVariant } from 'components/atoms'

import styles from './styles.module.scss'

interface CoinListProps {
  name?: string
  date?: string
  quantity?: number
  price?: number
}

const CoinList = ({
  name = '',
  date,
  quantity = 0,
  price = 0,
}: CoinListProps): JSX.Element => {
  return (
    <div className={styles.containerCoinList}>
      <div className={styles.initialLetter}>
        <InitialLetter letter={name.toUpperCase().substr(0, 1)} />
      </div>
      <div className={styles.description}>
        <Typography
          text={name[0].toUpperCase() + name.substr(1)}
          variant={TypographyVariant.h5}
        />
        <p>Added {date}</p>
      </div>
      <div className={styles.price}>
        <p>
          {(quantity * price).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
    </div>
  )
}

export { CoinList }
