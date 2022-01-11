import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children,  ...rest }) => {

    const auth = useSelector(state => state.auth)
  
    const isAuthenticated= auth.isAuthenticated
    return (
      <Route
       
        {...rest}
        render={({location}) => {
          return isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {from: location},
              }}
            />
          );
        }}
      />
    );
  };


  

  export default ProtectedRoute