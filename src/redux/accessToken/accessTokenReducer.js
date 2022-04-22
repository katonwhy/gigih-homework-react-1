const initialState = {
    accessToken: '',
    isAuthorized: false,
}

const accessTokenReducer = (state = initialState, actions) => {
  switch (actions.type) {
      case 'SAVE_ACCESS_TOKEN':
          return {
            ...state,
            accessToken: actions.payload
          }

      case 'SET_AUTHORIZE':
        return {
          ...state,
          isAuthorized: actions.payload
        }
  
      default:
          return state
  }
}

export default accessTokenReducer