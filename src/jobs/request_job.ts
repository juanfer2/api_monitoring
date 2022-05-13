import Queue from 'bull';
import moment from 'moment';
import opts from '../clients/job_client/config';
import { getHotels, DataParams } from '../modules/requests/request_service';

// $orderBy: AvailabilitiesManagerOrderInput
// $filterBy: AvailabilitiesManagerFilterInput

class RequestJob {
  private queue: any;
  private data: any;

  constructor(){
    this.data = {};
  }

  async startJob(options = {}): Promise<any>{
    this.queue = new Queue('ApiCall', opts);

    this.queue.process(async(job: any) =>{
      try {
        const dataList: DataParams[] = [
          {
            id: "bogota",
            city: "bogota",
            adults: 1,
            children: 0,
            checkin: moment(),
            checkout: moment().add(1, 'days'),
            isCity: true,
            isPoint: false,
            isNeighborhood: false
          },
          {
            id: "medellin",
            city: "medellin",
            adults: 1,
            children: 0,
            checkin: moment(),
            checkout: moment().add(1, 'days'),
            isCity: true,
            isPoint: false,
            isNeighborhood: false
          },
          {
            id: "pereira",
            city: "pereira",
            adults: 1,
            children: 0,
            checkin: moment(),
            checkout: moment().add(1, 'days'),
            isCity: true,
            isPoint: false,
            isNeighborhood: false
          },
        ]

        dataList.map((item) => getHotels(item))
      } catch (error) {
        Promise.reject(error);
      }
    });

    this.queue.add(this.data, options)
  }
}


export default RequestJob;
