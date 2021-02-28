import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { CgPlayListRemove } from 'react-icons/cg'

import { patchMerchantBill } from '../../api'
import { selectBills } from '../../store/merchants'
import { selectCategories } from '../../store/categories'
import type { Merchant } from '../../store'
import { useAppDispatch } from '../../store'
import { MerchantsTable } from '../../components'

const Bills: FC = () => {
  const dispatch = useAppDispatch()
  const { merchants } = useSelector(selectBills)
  const { categories } = useSelector(selectCategories)

  return (
    <MerchantsTable
      merchants={merchants}
      categories={categories}
      pageTitle="Bills"
      merchantAction={{
        Icon: <CgPlayListRemove size={24} />,
        action: (m: Merchant) => dispatch(patchMerchantBill(m)),
        colorMode: 'danger',
        label: 'Remove bill',
      }}
    />
  )
}

export default Bills
