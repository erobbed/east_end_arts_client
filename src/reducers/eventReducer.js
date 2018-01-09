function eventReducer(state = {all: [{title: 'Demo For SHACC', startDate: new Date(), endDate: new Date(), public: true}]}, action){
  switch (action.type) {
    case "SET_EVENTS":
      return Object.assign({}, state, {all: action.payload.events})
    default:
      return state
  }
}

export default eventReducer
