function userReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "SET_USERS":
      return Object.assign({}, state, {
        all: action.payload
      });
    default:
      return state;
  }
}

export default userReducer;
