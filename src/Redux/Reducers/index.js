import counter from './counterReducer'
import currentUser from './userReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
 currentUser,
    counter 
})

   
export default rootReducer