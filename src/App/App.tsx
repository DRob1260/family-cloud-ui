import React from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth0ProviderWithHistory } from '../auth0/Auth0ProviderWithHistory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Navigator } from './Navigator/Navigator';

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Auth0ProviderWithHistory>
                    <QueryClientProvider client={queryClient}>
                        <Navigator />
                        <Switch>
                            <Route path={'/family-cloud'}>
                                <Home />
                            </Route>
                        </Switch>
                    </QueryClientProvider>
                </Auth0ProviderWithHistory>
            </BrowserRouter>
        </div>
    );
};

export default App;
