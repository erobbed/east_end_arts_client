function noticeReducer(state = { latest: "" }, action) {
  switch (action.type) {
    case "SET_NOTICE":
      return Object.assign({}, state, { latest: action.payload.notice });
    default:
      return state;
  }
}

export default noticeReducer;
