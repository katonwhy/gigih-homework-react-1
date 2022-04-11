import { createStore } from 'redux'
import accessTokenReducer from './accessToken/accessTokenReducer'

const store = createStore(accessTokenReducer)

export default store