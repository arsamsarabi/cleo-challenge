import React, { FC } from 'react'

import type { Category, Merchant, Transaction } from '../../store'
import { MerchantBill } from '../merchantBill/MerchantBill'
import { Wrapper, PageHeader } from './styles'
import type { ButtonColorMode } from '../button/Button'

export type MerchantActionType = {
  action: (m: Merchant) => void
  colorMode: ButtonColorMode
  label: string
  Icon: JSX.Element
}

interface MerchantsTableProps {
  merchants: Merchant[]
  categories: Category[]
  pageTitle: string
  merchantAction: MerchantActionType
}

export const MerchantsTable: FC<MerchantsTableProps> = ({
  merchants,
  categories,
  pageTitle,
  merchantAction,
}) => {
  const grandTotal = merchants
    .reduce((total: number, merchant: Merchant) => {
      const merchantTotal = merchant.transactions.reduce(
        (acc: number, transaction: Transaction) => acc + transaction.amount,
        0
      )
      return total + merchantTotal
    }, 0)
    .toFixed(2)

  return (
    <Wrapper>
      <PageHeader>
        <h1>{pageTitle}</h1>
        <p>
          - Grand total: <span>£{grandTotal}</span>
        </p>
      </PageHeader>

      {merchants.map((merchant: Merchant) => {
        const category: Category = categories.find(
          (cat: Category) => cat.id === merchant.categoryId
        ) as Category

        return (
          <MerchantBill
            key={merchant.id}
            merchant={merchant}
            category={category}
            billAction={{
              action: merchantAction.action,
              colorMode: merchantAction.colorMode,
              label: merchantAction.label,
              Icon: merchantAction.Icon,
            }}
          />
        )
      })}
    </Wrapper>
  )
}
