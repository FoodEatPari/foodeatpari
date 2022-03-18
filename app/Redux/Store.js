import { createStore,applyMiddleware,combineReducers} from 'redux'
import cartReducer from './Cart/CartReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const rootReducer = combineReducers({  
cart_store:cartReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger))

export default store
