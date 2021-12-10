import { GraphQLClient } from 'graphql-request';

export const GraphqlClientWithAuth = (token: string): GraphQLClient => {
    return new GraphQLClient(`${process.env.REACT_APP_HASURA_URL}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};
