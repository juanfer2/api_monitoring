import moment from 'moment'
import Table from 'cli-table3'
import GraphqlClient from "../../clients/graphql_client";
import { GET_CITY_HISTORIES } from "../../clients/graphql_client/queries";
import logger from '../../utils/logger/logger_util';

interface queryCityHistoriesI {
  ip: string;
  city: string;
}

export const queryCityHistories = async({ip, city}: queryCityHistoriesI) => {
  const client = new GraphqlClient('token', {ip});

  logger.info(`✅ Call API cityStoriesServices ${city.toUpperCase()} ${ip.toUpperCase()}`)

  const heads: string[] = ['ip', 'city']
  heads.push('Time')

  const cliTable: any = new Table({
    head: heads,
    colWidths: [15, 20, 15]
  });

  const a = moment()
  console.time(`✅time_${city}_${ip}`);
  await client.query(GET_CITY_HISTORIES)
  console.timeEnd(`✅time_${city}_${ip}`)
  const b = moment().from(a)

  cliTable.push([ip, city, b]);

  console.log(cliTable.toString());
}
