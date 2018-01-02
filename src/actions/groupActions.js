export function setGroup(group){

  const body = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(group)
  }

  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/group`, body)
      .then(res => res.json())
      .then(res => dispatch({type: 'SET_GROUP', payload: res }) )
  }
}

export function createGroup(group, userId){
  const body = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({group: {name: group}, userId: userId})
  }

  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/groups`, body)
      .then (res => res.json() )
      .then( res => {
        if (res.success) {
          dispatch({type: 'ADD_GROUP', payload: {
              groups: res.groups
            }
          })
        } else {
          return res.failure
        }
      }
    )
  }
}

export function selectGroup(group){
  return (dispatch) => {
    dispatch({type: 'SELECT_GROUP', payload: {group: group} })
  }
}
