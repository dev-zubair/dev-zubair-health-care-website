import React from 'react';
import useAuth from './../../hooks/useAuth.js';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="text-center my-5 py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;
