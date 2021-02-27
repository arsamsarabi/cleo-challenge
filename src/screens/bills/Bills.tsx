import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CgPlayListRemove } from 'react-icons/cg'

import { patchMerchantBill } from '../../api'
import { selectBills } from '../../store/merchants'
import { selectCategories } from '../../store/categories'
import type { Merchant } from '../../store'
import { MerchantsTable } from '../../components'

const Bills: FC = () => {
  const dispatch = useDispatch()
  const { merchants } = useSelector(selectBills)
  const { categories } = useSelector(selectCategories)

  const removeBill = (m: Merchant) => {
    dispatch(patchMerchantBill(m))
  }

  return (
    <MerchantsTable
      merchants={merchants}
      categories={categories}
      pageTitle="Bills"
      merchantAction={{
        Icon: <CgPlayListRemove size={24} />,
        action: removeBill,
        colorMode: 'danger',
        label: 'Remove bill',
      }}
    />
  )
}

export default Bills
