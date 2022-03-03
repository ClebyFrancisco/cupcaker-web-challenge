import React from 'react'

import { Typography, TypographyVariant } from '..'
import { Paragraph } from '../typography/paragraph'
import styles from './styles.module.scss'

interface InitialLetterProps {
  letter?: string
  text?: string
}
const InitialLetter = ({ letter }: InitialLetterProps): JSX.Element => {
  return (
    <div className={styles.coinImage}>
      <Typography text={letter ? letter : ' '} variant={TypographyVariant.h3} />
    </div>
  )
}

const CoinDescription = ({ letter, text }: InitialLetterProps): JSX.Element => {
  return (
    <div className={styles.containerInitialLetter}>
      <InitialLetter letter={letter} />
      <div>
        <Paragraph text={text ? text : 'No description!'} />
      </div>
    </div>
  )
}

export { InitialLetter, CoinDescription }
