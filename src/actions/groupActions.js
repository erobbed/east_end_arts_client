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
