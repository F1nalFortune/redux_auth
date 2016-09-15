const auth = (state = { isAuthenticated: false }, action) => {
    switch(action.type) {
      case 'LOGIN':
        return {
          isAuthenticated: true,
          id: action.id,
          // refreshes page - tokens match
          token: action.token
        }
      case 'LOGOUT':
        return {}
      default:
        return state;
    }
}

export default auth;
