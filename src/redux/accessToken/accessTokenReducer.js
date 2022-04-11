const initialState = {
    accessToken: ''
}

const accessTokenReducer = (state = initialState, actions) => {
  switch (actions.type) {
      case 'SAVE_ACCESS_TOKEN':
          return {
            ...state,
            accessToken: actions.payload
          }
  
      default:
          return state
  }
}

export default accessTokenReducer