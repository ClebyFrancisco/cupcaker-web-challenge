import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Panel, Typography, TypographyVariant } from 'components/atoms'
import { CoinList, EmptyState, EmptyStateType } from 'components/molecules'

import { dataReturn } from '../AddNewCoin'
import styles from './styles.module.scss'

console.log(dataReturn)

const Home = (): JSX.Element => {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <Typography text="Watchlist" variant={TypographyVariant.h3} />
        <Button
          text="ADD NEW COIN"
          type="button"
          onclick={() => {
            history.push('/new-coin')
          }}
        />
      </div>

      <Panel className={styles.panel}>
        {dataReturn.length ? (
          dataReturn.map(item => (
            <CoinList
              name={item.name}
              date={item.date}
              quantity={Number(item.quantity)}
              price={item.price}
            />
          ))
        ) : (
          <EmptyState type={EmptyStateType.emptyWallet} />
        )}
      </Panel>
    </div>
  )
}

export default Home
