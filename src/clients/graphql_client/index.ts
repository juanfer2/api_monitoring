import { HeaderGraphl } from '@interfaces/graphql_interface';
import Client from "./grahpql_client_config";

export interface IGraphqlClient {
  query(queryString: string, variables?: any): any;
  mutation(queryString: string, variables?: any): any;
}

class GraphqlClient implements IGraphqlClient{
  private client: any;

  constructor(token: string, headers?: HeaderGraphl){
    this.client = Client({token, headers})
  }

  public async query(queryString: string, variables?: any) {
    return await this.client.request(queryString, variables)
  }

  public async mutation(mutationString: string, variables?: any) {
    return await this.client.request(mutationString, variables)
  }
}

export default GraphqlClient;
