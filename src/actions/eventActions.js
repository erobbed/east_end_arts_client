export function createEvent(state, groupID){
  const body = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({
      event: {
        title: state.title,
        start_date: state.startDate,
        end_date: state.endDate,
        details: state.details,
        lat: state.location.location.lat,
        long: state.location.location.lng,
        categoryID: state.category
      },
      group: groupID
    })
  }

  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/events`, body)
      .then (res => res.json() )
      .then( res => {
        if (res.success) {
          dispatch({type: 'SET_EVENTS', payload: {
              events: res.events
            }
          })
        } else {
          return res.failure
        }
      }
    )
  }
}
