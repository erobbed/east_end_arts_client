function eventReducer(state =
  {
    all: [],
    categories: [
      'Art Exhibit',
      'Music',
      'Theatre',
      'Performance',
      'Readings',
      'Book Signing',
      'Children’s Program'
    ]
  }, action){
  switch (action.type) {
    case "SET_EVENTS":
      return Object.assign({}, state, {all: action.payload.events})
    default:
      return state
  }
}

export default eventReducer
