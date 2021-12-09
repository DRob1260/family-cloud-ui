import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Navigator } from '../Navigator/Navigator';
import { Home } from '../Home/Home';

export const Router: React.FunctionComponent = () => {
    return (
        <div className={'Router'}>
            <BrowserRouter>
                <Navigator />
                <Switch>
                    <Route path={'/family-cloud'}>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};
