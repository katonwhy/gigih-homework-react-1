const saveAccessToken = (accessToken) => {
    return {
        type: 'SAVE_ACCESS_TOKEN',
        payload: accessToken
    }
}

export default saveAccessToken