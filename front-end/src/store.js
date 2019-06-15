import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

export default createStore(
 reducers,
 composeWithDevTools(applyMiddleware(thunkMiddleware, logger)),
)
