import {counter} from './reducers'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
                                  //应用异步中间件  
const store = createStore(counter,applyMiddleware(thunk));

export default store