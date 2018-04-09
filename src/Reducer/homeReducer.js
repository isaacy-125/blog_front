export default function homeReducer(state = 1, action) {
  switch (action.type) {
    case "add" :
      return state + 1;
      break;
    case "delete" :
      return state - 1;
    default:
      return state;
  }
}