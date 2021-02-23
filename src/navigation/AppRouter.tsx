import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { Layout, Loading } from '../components'
import { routes } from './routes'

const Bills = lazy(() => import('../screens/bills/Bills'))
const PotentialBills = lazy(() => import('../screens/potentialBills/PotentialBills'))

export const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Switch>
            <Route exact path={routes.BILLS}>
              <Bills />
            </Route>
            <Route exact path={routes.POTENTIAL_BILLS}>
              <PotentialBills />
            </Route>
            <Route path="*">
              <Redirect to={routes.BILLS} />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  )
}
