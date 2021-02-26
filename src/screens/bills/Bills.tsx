import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMerchants } from '../../api'
import { Wrapper } from './styles'
import { selectBills } from '../../store/merchants'
import { selectCategories } from '../../store/categories'

const Bills: FC = () => {
  const dispatch = useDispatch()
  const { merchants, loading, errors } = useSelector(selectBills)
  const {
    categories,
    loading: categoriesLoading,
    errors: categoriesErrors,
  } = useSelector(selectCategories)

  useEffect(() => {
    dispatch(fetchMerchants())
  }, [])

  console.log('Bills', merchants, loading, errors)
  console.log('PotentialBills', categories, categoriesLoading, categoriesErrors)

  return (
    <Wrapper>
      <h1>Bills</h1>
    </Wrapper>
  )
}

export default Bills
