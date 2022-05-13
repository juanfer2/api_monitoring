import logger from "../utils/logger/logger_util"
import TestJob from "./test_job"
import RequestJob from "./request_job"
import QueryCityHistoriesJob from "./query_city_histories_job"

const jobList = [
  // new TestJob('test').startJob({repeat: { cron: '*/1 * * * *' }}),
  new RequestJob().startJob({repeat: { cron: '*/1 * * * *' }}),
  new QueryCityHistoriesJob().startJob({repeat: { cron: '*/1 * * * *' }})
]

export const startJobs = () =>{
  logger.info('✨ schedule jobs is running ✨')
  jobList.map( job => job )
}
