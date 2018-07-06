import React  from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest }) => {
    //const { authedUser } = rest;
    const isLoggedIn = false
    return(
        <Route
            {...rest}
            render={(props) => (
                //authedUser !== null
                isLoggedIn
                    ? <Component {...props} />
                    :  <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                    }}
                    />
            )}
        />
    )
}

export default PrivateRoute