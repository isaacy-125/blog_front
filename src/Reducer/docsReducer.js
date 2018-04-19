import { Map, List } from 'immutable';

const docsState = Map({
  docsList: List([]),
})

export default function docsReducer(state = docsState, action) {
  switch(action.type) {
    // 塞入文章列表
    case 'list':
      return state.set('docsList', List(action.data));
    default:
      return state;
  }
}