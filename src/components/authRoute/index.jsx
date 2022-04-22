import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ children, type, ...props }) => {
    const isAuthorized = useSelector((state) => state.isAuthorized)

    if (type === 'guest') {
        return (
          <Route {...props}>
            {!isAuthorized ? children : <Redirect to="/create-playlist" />}
          </Route>
        )
      }
    
    return (
    <Route {...props}>
        {isAuthorized ? children : <Redirect to="/" />}
    </Route>
    )

}

export default AuthRoute