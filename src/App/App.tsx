import React from 'react';
import './App.scss';
import { Router } from '../Router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
            npm install --save graphql
        </div>
    );
}

export default App;
