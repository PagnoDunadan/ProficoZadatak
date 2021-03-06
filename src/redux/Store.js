import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware = applyMiddleware(
  thunk
)

const store = createStore(
  rootReducer,
  middleware
)

export default store
