import moment from 'moment'
import Table, { Cell, TableInstanceOptions } from 'cli-table3'
import GraphqlClient, { IGraphqlClient } from "../../clients/graphql_client";
import { GET_HOTELS } from "../../clients/graphql_client/queries";
import logger from '../../utils/logger/logger_util';

export interface DataParams {
  id: string;
  city: string;
  adults: number;
  children: number;
  checkin: any;
  checkout: any;
  isCity: boolean;
  isPoint: boolean;
  isNeighborhood: boolean;
}

const client = new GraphqlClient('token');

export const getHotels = async(data: DataParams) => {
  logger.info(`✅ Call API ${data.city.toUpperCase()}`)

  const heads: string[] = Object.keys(data)
  heads.push('Time')

  const cliTable: any = new Table({
    head: heads,
    colWidths: [10, 10, 10, 10, 15, 15, 10, 10, 10]
  });

  const a = moment()
  console.time(`✅time_${data.city}`);
  const res = await client.query(GET_HOTELS, data)
  console.timeEnd(`✅time_${data.city}`)
  const b = moment().from(a)

  cliTable.push([
    data.id as Cell,
    data.city,
    data.adults,
    data.children,
    data.checkin.format('YYYY-MM-DD'),
    data.checkout.format('YYYY-MM-DD'),
    data.isCity ? 'True' : 'False',
    data.isPoint ? 'True' : 'False',
    data.isNeighborhood ? 'True' : 'False',
    b
  ]);

  console.log(cliTable.toString());
}
