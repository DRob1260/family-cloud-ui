import React from 'react';
import { Router, useLocation } from 'react-location';
import { WishListsHome } from './WishListsHome/WishListsHome';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Navigator } from '../Navigator/Navigator';

const queryClient = new QueryClient();

export const App: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <div className={'App'}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <Navigator />
                <Router
                    location={location}
                    routes={[
                        {
                            path: '/',
                            children: [
                                {
                                    path: 'wish-lists',
                                    element: <WishListsHome />,
                                },
                            ],
                        },
                    ]}
                />
            </QueryClientProvider>
        </div>
    );
};
