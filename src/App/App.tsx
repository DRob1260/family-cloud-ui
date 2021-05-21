import React from 'react';
import './App.scss';
import {AppBar, Link, Toolbar} from '@material-ui/core';
import {Switch, Route, Link as RouterLink} from 'react-router-dom';
import {FamilyRouter} from './FamilyRouter/FamilyRouter';
import {useAuth0} from '@auth0/auth0-react';
import {UserAccount} from './UserAccount/UserAccount';
import {Auth0TokenWrapper} from './Auth0TokenWrapper';

const App: React.FunctionComponent = () => {
    const auth0 = useAuth0();

    return (
    <div className={'App'}>
        <header>
            <AppBar position={"static"}>
                <Toolbar>
                    <Link component={RouterLink} to={"/"}>Home</Link>
                    <Link component={RouterLink} to={"/family"}>Family</Link>
                </Toolbar>
            </AppBar>
        </header>
        <Switch>
            <Route path={"/logout"}>
                {auth0.isAuthenticated &&
                    auth0.logout({
                        returnTo: `${window.location.origin}/logout`
                    })
                }
                {!auth0.isAuthenticated &&
                    <div id={"logout-container"}>Log out successful.</div>
                }
            </Route>
            <Route path={"/family"}>
                <div><FamilyRouter /></div>
            </Route>
            <Route path={"/my-account"}>
                <Auth0TokenWrapper>
                    <UserAccount />
                </Auth0TokenWrapper>
            </Route>
            <Route path={"/"}>
                <div>Home page.</div>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
