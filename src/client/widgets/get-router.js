import React from 'react'
import { Router, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from 'shared/configure-store.js'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import analytics from 'utils/analytics'

import { createHistory } from 'history'

//set's /widgets as a history root so routes can be defined acoordingly
const browserHistory = useRouterHistory(createHistory)({
  basename: '/widgets'
})


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
history.listen(location => analytics.page())

//overriding Router function to pass custom props to a child components, building a higer order function to
//provide containerWidth to inner-clojure
const buildCreateElement = containerW =>
  (Component, props) => <Component {...props} containerWidth={containerW}/>


const getRouter = containerWidth => {
  return <Router history={history} routes={routes} createElement={buildCreateElement(containerWidth)} />
}

const getConfiguredWithStoreRouter = containerWidth => {
  return (
    <Provider store={store}>
      {getRouter(containerWidth)}
    </Provider>
  )
}

export {
  getRouter,
  getConfiguredWithStoreRouter
}
