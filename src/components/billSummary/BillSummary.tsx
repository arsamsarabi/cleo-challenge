import React, { FC } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import type { Merchant, Transaction, Category } from '../../store'
import DefaultPlaceholderImage from '../../assets/default-placeholder-image.png'
import {
  Wrapper,
  MerchantImage,
  CategoryIcon,
  MerchantNameRow,
  TransactionSummary,
} from './styles'

interface BillSummaryProps {
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
  const totalAmount = merchant.transactions
    .reduce((acc: number, curr: Transaction) => acc + curr.amount, 0)
    .toFixed(2)

  return (
    <Wrapper onClick={() => handleClick(!open)}>
      <MerchantImage
        src={merchant.iconUrl || DefaultPlaceholderImage}
        alt="Merchant icon"
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
          <span>£{totalAmount}</span>
        </TransactionSummary>
      </div>

      {open ? <FaChevronUp /> : <FaChevronDown />}
    </Wrapper>
  )
}
