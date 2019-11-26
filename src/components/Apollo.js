import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { createHttpLink } from 'apollo-link-http';
// import fetch from 'isomorphic-unfetch';

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.GRAPHQL_URL;


export default withApollo(
    ({ ctx, headers, initialState }) =>
      new ApolloClient({
        uri: GRAPHQL_URL,
        cache: new InMemoryCache().restore(initialState || {})
      })
)