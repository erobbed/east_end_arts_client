function groupReducer(state = { groups: [], selectedGroup: "" }, action) {
  switch (action.type) {
    case "SET_GROUPS":
      return Object.assign({}, state, { groups: action.payload.groups });
    case "SELECT_GROUP":
      return Object.assign({}, state, { selectedGroup: action.payload });
    case "DESELECT":
      return Object.assign({}, state, { selectedGroup: "" });
    default:
      return state;
  }
}

export default groupReducer;
