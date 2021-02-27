import React, { FC, useState } from 'react'

import type { Merchant, Category } from '../../store'
import { BillSummary } from '../billSummary/BillSummary'
import { Transactions } from '../transactions/Transactions'
import { ActionButton } from '../button/Button'
import type { ButtonColorMode } from '../button/Button'
import { Wrapper, ActionsRow } from './styles'

interface MerchantBillProps {
  merchant: Merchant
  category: Category
  billAction: {
    action: (m: Merchant) => void
    colorMode: ButtonColorMode
    label: string
    Icon: JSX.Element
  }
}

export const MerchantBill: FC<MerchantBillProps> = ({
  merchant,
  category,
  billAction,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <BillSummary
        merchant={merchant}
        category={category}
        handleClick={setOpen}
        open={open}
      />
      <ActionsRow open={open}>
        <ActionButton
          onClick={() => billAction.action(merchant)}
          mode={billAction.colorMode}
        >
          {billAction.Icon}
          {billAction.label}
        </ActionButton>
      </ActionsRow>
      {open && <Transactions transactions={merchant.transactions} />}
    </Wrapper>
  )
}
