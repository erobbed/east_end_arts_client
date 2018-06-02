function eventReducer(
  state = {
    all: [],
    categories: [
      { name: "Art Exhibit", id: 1 },
      { name: "Astronomy", id: 2 },
      { name: "Benefit Event", id: 3 },
      { name: "Book Signing", id: 4 },
      { name: "Children’s Program", id: 5 },
      { name: "Culinary", id: 6 },
      { name: "Ecology", id: 7 },
      { name: "Film", id: 8 },
      { name: "Lecture", id: 9 },
      { name: "Literary", id: 10 },
      { name: "Music", id: 11 },
      { name: "Meeting", id: 16 },
      { name: "Nature", id: 12 },
      { name: "Performance", id: 13 },
      { name: "Theatre", id: 14 },
      { name: "Walking Tours and Trails", id: 15 }
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
