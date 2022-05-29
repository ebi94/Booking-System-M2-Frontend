import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

const listRoutes = [
    {
        auth: false,
        component: Home,
        path: '/'
    },
    {
        auth: false,
        component: Login,
        path: '/login'
    }
];

const Routes = () => {
    return (
        <Switch>
            {listRoutes.map((data, i) =>
                <Route key={i} path={data.path} component={data.component} exact={true} />
            )}
            <Route component={PageNotFound} exact={true} />
        </Switch>
    );
};

export default Routes