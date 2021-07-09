import loginReducer from './dashboard.reducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
   dashboard:loginReducer
});
export default rootReducer;