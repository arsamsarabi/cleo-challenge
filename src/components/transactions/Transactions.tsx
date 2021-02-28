import React, { FC } from 'react'
import dayjs from 'dayjs'

import type { Transaction } from '../../store'
import { Wrapper, Details } from './styles'

interface TransactionsProps {
  transactions: Transaction[]
}

export const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  return (
    <Wrapper data-testid="transactions-wrapper">
      <p>Transaction history:</p>
      {transactions.map(({ id, amount, date }: Transaction, i: number) => (
        <Details key={id}>
          <span>{i + 1}. </span>
          <p>£{amount}</p>
          <span>on</span>
          <p>{dayjs(date).format('ddd DD MMM YYYY hh:mm a')}</p>
        </Details>
      ))}
    </Wrapper>
  )
}
