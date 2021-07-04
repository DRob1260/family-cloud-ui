import variables from "../variables";
import {GraphQLClient} from 'graphql-request';

export const graphqlClient = (): GraphQLClient => {
    return new GraphQLClient(
        `${variables.familyCloudApiUrl}/graphql`
    );
}

export const graphqlClientWithAuth = (token: string): GraphQLClient => {
    return new GraphQLClient(
        `${variables.familyCloudApiUrl}/graphql`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    );
}
