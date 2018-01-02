function eventReducer(state = {all: []}, action){
  switch (action.type) {
    case "SET_EVENTS":
      return Object.assign({}, state, {all: action.payload.events})
    default:
      return state
  }
}

export default eventReducer
