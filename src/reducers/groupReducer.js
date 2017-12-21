function groupReducer(state = {group: {}}, action){
  switch (action.type) {
    case "SET_GROUP":
      return Object.assign({}, state, {group: action.payload})
    default:
      return state
  }
}

export default groupReducer
