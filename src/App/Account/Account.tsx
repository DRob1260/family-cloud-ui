import React, {useState} from 'react';
import { AuthContext } from "../../context/AuthContext";
import {useGetCurrentUserQuery} from '../../graphql/generated/types';
import {graphqlClientWithAuth} from '../../graphql/GraphqlClient';
import {UserAccount} from './AuthModal/UserAccount/UserAccount';

export const Account: React.FunctionComponent = () => {

    return (
        <AuthContext.Consumer>
            {authContext => (
                <div className={"Account"}>
                    {authContext.token &&
                        <UserAccount token={authContext.token} />
                    }
                    {!authContext.user && authContext.setShowAuthModal(true)}
                </div>
            )}
        </AuthContext.Consumer>
    )
}
