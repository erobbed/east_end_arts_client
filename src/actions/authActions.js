export function authorize(code){
  const body = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': `Token token=${localStorage.getItem('jwt')}`
    }
  }

  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}`)
  }
}

export function signup(params){

}
