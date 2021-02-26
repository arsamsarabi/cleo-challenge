import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMerchants } from '../../api'
import { Wrapper } from './styles'
import { selectPotentialBills } from '../../store/merchants'

const PotentialBills: FC = () => {
  const dispatch = useDispatch()
  const { merchants, loading, errors } = useSelector(selectPotentialBills)

  useEffect(() => {
    dispatch(fetchMerchants())
  }, [])

  console.log('PotentialBills', merchants, loading, errors)

  return (
    <Wrapper>
      <h1>PotentialBills</h1>
    </Wrapper>
  )
}

export default PotentialBills
