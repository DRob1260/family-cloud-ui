import React, {useContext} from 'react';
import {useGetCurrentUserQuery} from '../../graphql/generated/types';
import {graphqlClientWithAuth} from '../../GraphqlClient';
import {TokenContext} from '../Auth0TokenWrapper';

export const UserAccount: React.FunctionComponent = () => {
    const { token } = useContext(TokenContext);

    const getCurrentUser = useGetCurrentUserQuery(graphqlClientWithAuth(token));

    return (
        <div className={"UserAccount"}>
            {getCurrentUser.isSuccess && getCurrentUser.data.userCurrent &&
                <div>
                    <h1>{getCurrentUser.data.userCurrent.firstName} {getCurrentUser.data.userCurrent.lastName}</h1>
                </div>
            }
        </div>
    )
}
