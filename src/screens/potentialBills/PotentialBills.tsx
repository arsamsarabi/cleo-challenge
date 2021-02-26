import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMerchants } from '../../api'
import { Wrapper } from './styles'
import { selectPotentialBills } from '../../store/merchants'
import { selectCategories } from '../../store/categories'

const PotentialBills: FC = () => {
  const dispatch = useDispatch()
  const { merchants, loading, errors } = useSelector(selectPotentialBills)
  const {
    categories,
    loading: categoriesLoading,
    errors: categoriesErrors,
  } = useSelector(selectCategories)

  useEffect(() => {
    dispatch(fetchMerchants())
  }, [])

  console.log('PotentialBills', merchants, loading, errors)
  console.log('PotentialBills', categories, categoriesLoading, categoriesErrors)

  return (
    <Wrapper>
      <h1>PotentialBills</h1>
    </Wrapper>
  )
}

export default PotentialBills
