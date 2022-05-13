import Queue from 'bull';
import moment from 'moment';
import opts from '../clients/job_client/config';
import { queryCityHistories } from '../modules/requests/query_city_histories_service';

class QueryCityHistoriesJob {
  private queue: any;
  private data: any;

  constructor(){
    this.data = {};
  }

  async startJob(options = {}): Promise<any>{
    this.queue = new Queue('QueryCityHistories', opts);

    this.queue.process(async(job: any) =>{
      try {
        const localizationlist = [
          {city: 'Bogotá', ip: '102.38.230.0'},
          {city: 'Medellín', ip: '201.184.239.170'},
          {city: 'Pereira', ip: '186.86.12.83'},
          {city: 'Lima', ip: '181.224.225.0'},
          {city: 'Ciudad de México', ip: '187.190.154.77'},
        ]

        localizationlist.map((localization) => queryCityHistories(localization))
      } catch (error) {
        Promise.reject(error);
      }
    });

    this.queue.add(this.data, options)
  }
}


export default QueryCityHistoriesJob;
