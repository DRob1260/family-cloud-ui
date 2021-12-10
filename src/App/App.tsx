import React from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth0ProviderWithHistory } from '../Auth0ProviderWithHistory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Navigator } from '../Navigator/Navigator';
import { Auth0TokenWrapper } from '../Auth0TokenWrapper';

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Auth0ProviderWithHistory>
                    <QueryClientProvider client={queryClient}>
                        <Navigator />
                        <Switch>
                            <Route path={'/family-cloud'}>
                                <Auth0TokenWrapper>
                                    <Home />
                                </Auth0TokenWrapper>
                            </Route>
                        </Switch>
                    </QueryClientProvider>
                </Auth0ProviderWithHistory>
            </BrowserRouter>
        </div>
    );
}

export default App;
