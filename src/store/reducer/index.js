import {
	combineReducers
} from 'redux'
import home from './home/index.js'
import theater from './theater/index.js'
export default combineReducers({
	theater,
	home
})