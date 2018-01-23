import moment from "moment";

function eventReducer(
  state = {
    all: [],
    categories: [
      "Art Exhibit",
      "Music",
      "Theatre",
      "Performance",
      "Readings",
      "Book Signing",
      "Children’s Program"
    ]
  },
  action
) {
  switch (action.type) {
    case "SET_EVENTS":
      let events = action.payload.events.map(event =>
        Object.assign({}, event, {
          startDate: moment(event.start_date),
          endDate: moment(event.end_date)
        })
      );
      return Object.assign({}, state, { all: events });
    default:
      return state;
  }
}

export default eventReducer;
