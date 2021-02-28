import React, { FC } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import type { Merchant, Category } from '../../store'
import DefaultPlaceholderImage from '../../assets/default-placeholder-image.png'
import {
  Wrapper,
  MerchantImage,
  CategoryIcon,
  MerchantNameRow,
  TransactionSummary,
} from './styles'
import { calcSumTransactions } from '../../utils'

export interface BillSummaryProps {
  merchant: Merchant
  category: Category
  handleClick: (open: boolean) => void
  open: boolean
}

export const BillSummary: FC<BillSummaryProps> = ({
  merchant,
  category,
  handleClick,
  open,
}) => {
  const totalAmount = calcSumTransactions(merchant.transactions)

  return (
    <Wrapper onClick={() => handleClick(!open)} data-testid="summary-wrapper">
      <MerchantImage
        src={merchant.iconUrl || DefaultPlaceholderImage}
        alt="Merchant icon"
        data-testid="merchant-icon"
      />

      <div>
        <MerchantNameRow>
          {category && (
            <CategoryIcon src={category.iconUrl} alt={category.name} />
          )}
          <h1>{merchant.name}</h1>
        </MerchantNameRow>
        <TransactionSummary>
          <span>{merchant.transactions.length}</span>
          transactions amounting to
          <span data-testid="transactions-total-amount">£{totalAmount}</span>
        </TransactionSummary>
      </div>

      {open ? (
        <FaChevronUp data-testid="chevron-up" />
      ) : (
        <FaChevronDown data-testid="chevron-down" />
      )}
    </Wrapper>
  )
}
