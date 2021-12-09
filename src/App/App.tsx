import React from 'react';
import './App.scss';
import { Router } from '../Router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth0ProviderWithHistory } from '../Auth0ProviderWithHistory';

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <Auth0ProviderWithHistory>
                <QueryClientProvider client={queryClient}>
                    <Router />
                </QueryClientProvider>
            </Auth0ProviderWithHistory>
        </div>
    );
}

export default App;
