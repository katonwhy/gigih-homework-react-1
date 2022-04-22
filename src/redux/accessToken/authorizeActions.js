const setAuthorize = (isAuthorized) => {
    return {
        type: 'SET_AUTHORIZE',
        payload: isAuthorized
    }
}

export default setAuthorize