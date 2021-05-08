// import { render } from '@testing-library/react'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute({ component, ...rest }) {
    var RenderComponent = component
    let hasToken = JSON.parse(localStorage.getItem('auth'));
    console.log(hasToken)
    return (
        <div>
            <Route
                {...rest}
                render={
                    props => {
                        return hasToken !== null ? (
                            <RenderComponent {...props} />
                        ) : (
                            <Redirect to={{
                                pathname: '/'
                            }}
                            />)
                    }
                }
            />
        </div>
    )
}

export default ProtectedRoute
