import React  from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({component: Component, ...rest }) => {
    const { authedUser }  = rest
   // const isLoggedIn = true
    return(
        <Route
            {...rest}
            render={(props) => (
               authedUser !== null
               //isLoggedIn
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

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(PrivateRoute)