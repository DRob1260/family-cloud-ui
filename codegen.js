module.exports = {
    schema: [
        {
            "https://liked-malamute-74.hasura.app/v1/graphql": {
                "headers": {
                    // todo: REMOVE THIS. Wasn't working when set as an env variable.
                    "Authorization": "Bearer {TOKEN}"
                }
            }
        }
    ],
    documents: "src/**/*.graphql",
    generates: {
        "src/types/hasura.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-query"
            ],
            config: {
                "fetcher": "graphql-request"
            }
        }
    }
}