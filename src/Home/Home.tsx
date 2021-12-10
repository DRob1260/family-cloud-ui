import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {WishLists} from "./WishLists/WishLists";

export const Home: React.FunctionComponent = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <div className={'Home page'}>
            {console.log(user)}
            {isAuthenticated && user &&
                <div>
                    <div>Welcome, {user?.nickname}</div>
                    <WishLists />
                </div>
            }
            {!isAuthenticated &&
                <div>Please login.</div>
            }
        </div>
    );
};
