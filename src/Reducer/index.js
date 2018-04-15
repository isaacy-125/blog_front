// reducer 总树
import { combineReducers } from 'redux';
import { Map, List } from 'immutable';

const indexState = Map({
  // 是否登录
  isAuth: false,
  user: Map({
    id: '',
    username: '',
  }),
  menus: List([]),
})

export function indexReducer(state = indexState, action) {
  switch (action.type) {
    // 登录
    case "y":
      return state.set('isAuth', true);
    // 退出
    case "n":
      return state.set('isAuth', false);
    // 设置登录用户id
    case 'setUserId':
      return state.setIn(['user', 'id'], action.data);
    // 设置登录用户名
    case 'setUserName':
      return state.setIn(['user', 'username'], action.data);
    // 设置菜单数据
    case 'setMenus':
      return state.set('menus', List(action.data));
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // 登录相关树
  indexReducer,
})

export default rootReducer;