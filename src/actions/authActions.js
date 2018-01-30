export function signup(input) {
  let user = {
    user: {
      username: input.username,
      email: input.email,
      password: input.password
    }
  };

  const body = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify(user)
  };

  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/users`, body)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          dispatch({
            type: "LOG_IN",
            payload: {
              user: res.user,
              jwt: res.jwt,
              id: res.user.id
            }
          });

          dispatch({
            type: "SET_GROUPS",
            payload: {
              groups: res.groups
            }
          });

          dispatch({
            type: "SET_NOTICE",
            payload: {
              notice: res.notice
            }
          });

          dispatch({
            type: "SET_EVENTS",
            payload: {
              events: res.events
            }
          });
        } else {
          return res.failure;
        }
      });
  };
}

export function login(input) {
  let user = {
    user: {
      username: input.username,
      password: input.password
    }
  };

  const body = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify(user)
  };

  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/login`, body)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          dispatch({
            type: "LOG_IN",
            payload: {
              user: res.user,
              jwt: res.jwt,
              id: res.user.id
            }
          });

          dispatch({
            type: "SET_GROUPS",
            payload: {
              groups: res.groups
            }
          });

          dispatch({
            type: "SET_NOTICE",
            payload: {
              notice: res.notice
            }
          });

          dispatch({
            type: "SET_EVENTS",
            payload: {
              events: res.events
            }
          });
        } else {
          return res.failure;
        }
      });
  };
}

export function currentUser(jwt) {
  const body = {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/me`, body)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "LOG_IN",
          payload: {
            user: res.user,
            jwt: jwt,
            id: res.user.id
          }
        });

        dispatch({
          type: "SET_GROUPS",
          payload: {
            groups: res.groups
          }
        });

        dispatch({
          type: "SET_NOTICE",
          payload: {
            notice: res.notice
          }
        });

        dispatch({
          type: "SET_EVENTS",
          payload: {
            events: res.events
          }
        });
      });
  };
}

export function logOut() {
  return {
    type: "LOG_OUT",
    payload: {
      user: "",
      groups: []
    }
  };
}
