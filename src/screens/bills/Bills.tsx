import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMerchants } from '../../api'
import { Wrapper } from './styles'
import { selectBills } from '../../store/merchants'

const Bills: FC = () => {
  const dispatch = useDispatch()
  const { merchants, loading, errors } = useSelector(selectBills)

  useEffect(() => {
    dispatch(fetchMerchants())
  }, [])

  console.log('Bills', merchants, loading, errors)

  return (
    <Wrapper>
      <h1>Bills</h1>
    </Wrapper>
  )
}

export default Bills
