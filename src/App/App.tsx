import React from 'react';
import './App.scss';
import { Router, useLocation } from 'react-location';
import { WishListsHome } from './WishListsHome/WishListsHome';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Navigator } from './Navigator/Navigator';
import { Authenticated } from './Authenticated/Authenticated';
import { Login } from './Login/Login';
import { Logout } from './Logout/Logout';

const queryClient = new QueryClient();

export const App: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <div className={'App'}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <Navigator />
                <div id={'app-content'}>
                    <Router
                        location={location}
                        routes={[
                            {
                                path: '/',
                                children: [
                                    {
                                        path: 'login',
                                        element: <Login />,
                                    },
                                    {
                                        path: 'logout',
                                        element: <Logout />,
                                    },
                                    {
                                        path: 'authenticated',
                                        element: <Authenticated />,
                                    },
                                    {
                                        path: 'wish-lists',
                                        element: <WishListsHome />,
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </QueryClientProvider>
        </div>
    );
};
