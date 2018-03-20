export function getUsers() {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/users`)
      .then(res => res.json())
      .then(users => {
        dispatch({
          type: "SET_USERS",
          payload: users
        });
      });
  };
}

export function toggleAdmin(id) {
  const body = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({ user: { id: id } })
  };

  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/admin`, body)
      .then(res => res.json())
      .then(users => {
        dispatch({
          type: "SET_USERS",
          payload: users
        });
      });
  };
}
