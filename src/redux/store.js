import {counter} from './reducers'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

                                  //应用异步中间件  
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store