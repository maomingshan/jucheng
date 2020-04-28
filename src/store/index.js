import {
	createStore,//创建仓库
	applyMiddleware//中间件
} from 'redux'
import rootReducer from './reducer/index.js'
import thunk from 'redux-thunk'//用于异步action
export default createStore(rootReducer,applyMiddleware(thunk))