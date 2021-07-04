import React from "react";
import {useGetCurrentUserQuery} from '../../../../graphql/generated/types';
import {graphqlClientWithAuth} from '../../../../graphql/GraphqlClient';
import {Typography} from '@material-ui/core';

export const UserAccount: React.FunctionComponent<{
    token: string
}> = ({token}) => {
    const getCurrentUser = useGetCurrentUserQuery(graphqlClientWithAuth(token));

    return(
        <div className={"UserAccount"}>
            {getCurrentUser.isSuccess &&
                <div>
                    <Typography variant={"h4"} component={"h1"}>Welcome, {getCurrentUser.data.userCurrent?.firstName} {getCurrentUser.data.userCurrent?.lastName}</Typography>
                    {console.log(getCurrentUser.data.userCurrent)}
                </div>
            }
        </div>
    )
}
