import {count} from './reducers'
import {createStore} from 'redux'

const store = createStore(count);

export default store