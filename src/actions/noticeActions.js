export function setNotice(notice) {
  let body = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({ notice: notice })
  };

  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/notices`, body)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          dispatch({
            type: "SET_NOTICE",
            payload: {
              notice: json.notice
            }
          });
        } else {
          return json.failure;
        }
      });
  };
}

export function getLatestNotice() {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_RAILS_URL}/notices`)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          dispatch({
            type: "SET_NOTICE",
            payload: {
              notice: json.notice
            }
          });
        } else {
          return json.failure;
        }
      });
  };
}
