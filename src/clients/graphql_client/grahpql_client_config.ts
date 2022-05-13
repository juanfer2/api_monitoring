import { HeaderGraphl } from '@interfaces/graphql_interface';
import { request, gql, GraphQLClient } from 'graphql-request'

// https://family-finances-backend.herokuapp.com/api/v1/graphql
// http://localhost:3000//api/v1/graphql

// Run GraphQL queries/mutations using a static function
// ... or create a GraphQL client instance to send requests

const graphqlAPI: string = process.env.GRAPHQL_API || 'https://aos.ayenda.co/api/v1'

interface ClientGraphql {
  token: string;
  url?: string;
  headers?: HeaderGraphl;
}

const Client = ({token, url = graphqlAPI, headers}: ClientGraphql) => {
  
  return new GraphQLClient(url, { 
  headers: {
    Authorization: token || '',
    ...headers
  }
})}
//client.request(query, variables).then((data) => console.log(data))

export default Client
