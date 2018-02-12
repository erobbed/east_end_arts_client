function eventReducer(
  state = {
    all: [],
    categories: [
      "Art Exhibit",
      "Astronomy",
      "Benefit Event",
      "Book Signing",
      "Children’s Program",
      "Culinary",
      "Ecology",
      "Film",
      "Lecture",
      "Literary",
      "Music",
      "Nature",
      "Performance",
      "Theatre",
      "Walking Tours and Trails"
    ]
  },
  action
) {
  switch (action.type) {
    case "SET_EVENTS":
      let events = action.payload.events.map(event =>
        Object.assign({}, event, {
          startDate: new Date(event.start_date),
          endDate: new Date(event.end_date)
        })
      );
      return Object.assign({}, state, { all: events });
    default:
      return state;
  }
}

export default eventReducer;
