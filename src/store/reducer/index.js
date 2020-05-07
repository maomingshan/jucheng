import {
	combineReducers
} from 'redux'
import home from './home/index.js'
import theater from './theater/index.js'
import show from './showlist'
import detail from './detail'
import thelist from './thelist'
export default combineReducers({
	theater,
	home,
	show,
	detail,
	thelist
})