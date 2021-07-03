import React, {useState} from 'react';
import './App.scss';
import {AppBar, Link, Toolbar} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Link as RouterLink} from 'react-router-dom';
import {FamilyRouter} from './FamilyRouter/FamilyRouter';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AccountRouter} from './AccountRouter/AccountRouter';
import {AuthContext} from "../context/AuthContext";
import firebase from "firebase/app";
import {AuthModal} from './AccountRouter/AuthModal/AuthModal';

const App: React.FunctionComponent = () => {
    const [user, setUser] = useState<firebase.User | undefined>();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const queryClient = new QueryClient();

  return (
    <div className={'App'} id={"App"}>
        <AuthContext.Provider value={{
            user: user,
            setUser: setUser,
            showAuthModal: showAuthModal,
            setShowAuthModal: setShowAuthModal
        }}>
            <AuthModal open={showAuthModal} setOpen={setShowAuthModal} />
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <header>
                        <AppBar position={"static"}>
                            <Toolbar>
                                <Link component={RouterLink} to={"/"}>Home</Link>
                                <Link component={RouterLink} to={"/family"}>Family</Link>
                            </Toolbar>
                        </AppBar>
                    </header>
                    <Switch>
                        <Route path={"/account"}>
                            <div><AccountRouter /></div>
                        </Route>
                        <Route path={"/family"}>
                            <div><FamilyRouter /></div>
                        </Route>
                        <Route path={"/"} exact={true}>
                            <div>Home page.</div>
                        </Route>
                    </Switch>
                </QueryClientProvider>
            </BrowserRouter>
        </AuthContext.Provider>
    </div>
  );
}

export default App;
