function authReducer(state = {user: '', groups: []}, action){
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem('jwt', action.payload.jwt)
      localStorage.setItem('id', action.payload.id)
      return Object.assign({}, state, {loggedIn: true, user: action.payload.user, groups: action.payload.groups})
    case 'LOG_OUT':
      localStorage.clear()
      return Object.assign({}, state, {loggedIn: false, user: action.payload.user})
    default:
      return state
  }
}

export default authReducer
