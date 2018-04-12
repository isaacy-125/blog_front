import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// 通过redux-thunk中间件 创建store
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, composeWithDevTools());

export default store;