import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ErrorBoundary, Loading } from './components'
import { GlobalStyles } from './styles'
import { AppRouter } from './navigation'
import { fetchMerchants, fetchCategories } from './api'
import { selectBills } from './store/merchants'
import { selectCategories } from './store/categories'
import { useAppDispatch } from './store'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { loading, errors } = useSelector(selectBills)
  const { loading: categoriesLoading, errors: categoriesErrors } = useSelector(
    selectCategories
  )

  useEffect(() => {
    dispatch(fetchMerchants())
    dispatch(fetchCategories())
  }, [])

  if (loading || categoriesLoading) return <Loading />

  if (errors || categoriesErrors)
    return (
      <div>
        <h1>Error fetching API data! refresh the page to try again.</h1>
      </div>
    )

  return (
    <ErrorBoundary>
      <GlobalStyles />
      <AppRouter />
    </ErrorBoundary>
  )
}
export default App
