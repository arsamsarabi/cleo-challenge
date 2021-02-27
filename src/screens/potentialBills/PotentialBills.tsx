import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CgPlayListAdd } from 'react-icons/cg'

import { patchMerchantBill } from '../../api'
import { selectPotentialBills } from '../../store/merchants'
import { selectCategories } from '../../store/categories'
import type { Merchant } from '../../store'
import { MerchantsTable } from '../../components'

const PotentialBills: FC = () => {
  const dispatch = useDispatch()
  const { merchants } = useSelector(selectPotentialBills)
  const { categories } = useSelector(selectCategories)

  const addBill = (m: Merchant) => {
    dispatch(patchMerchantBill(m))
  }

  return (
    <MerchantsTable
      merchants={merchants}
      categories={categories}
      pageTitle="Potential Bills"
      merchantAction={{
        Icon: <CgPlayListAdd size={24} />,
        action: addBill,
        colorMode: 'success',
        label: 'Add bill',
      }}
    />
  )
}

export default PotentialBills
