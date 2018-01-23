export function selectGroup(group) {
  const body = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify(group)
  };

  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/group`, body)
      .then(res => res.json())
      .then(res => dispatch({ type: "SELECT_GROUP", payload: res }));
  };
}

export function deselectGroup() {
  return dispatch => dispatch({ type: "DESELECT" });
}

export function createGroup(group, userId) {
  const body = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({ group: { name: group }, userId: userId })
  };

  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/groups`, body)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          dispatch({
            type: "SET_GROUPS",
            payload: {
              groups: res.groups
            }
          });
        } else {
          return res.failure;
        }
      });
  };
}
