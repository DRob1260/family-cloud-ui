import React, {useState} from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {LoginModal} from './LoginModal/LoginModal';
import {firebase} from '../../firebase';

export const AccountRouter: React.FunctionComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {path} = useRouteMatch();

    firebase.auth().onAuthStateChanged((user) => {
        return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    return (
        <div className={"AccountRouter"} id={"AccountRouter"}>
            <Switch>
                <Route path={`${path}/login`}>
                    <LoginModal open={true} />
                </Route>
            </Switch>
        </div>
    )
}
