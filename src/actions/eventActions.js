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
        start_date: state.startDate._d,
        end_date: state.endDate._d,
        details: state.details,
        location: state.location.placeId,
        categoryID: state.category
      },
      group: groupID
    })
  }

  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/events`, body)
      .then ( res => res.json() )
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

export function publish(eventId){
  const body = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({event: eventId})
  }

  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/events/${eventId}`, body)
      .then( res => res.json() )
      .then( res => {
        if (res.success) {
        dispatch({type: 'SET_EVENTS', payload: {
            events: res.events
          }
        })
      } else {
        return res.failure
      }
    })
  }
}
