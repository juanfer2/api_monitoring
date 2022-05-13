import { request } from '../../../clients/prisma_client';
import { Request } from '@prisma/client'

export interface InputRequest {
  title: string;
  description: string;
  projectId: number;
  type: string;
  url: string;
  method?: string;
}

export const create = async(dataInput: InputRequest): Promise<any> => {
  const data: any = {
    title: dataInput.title,
    description: dataInput.description,
    type: dataInput.type,
    url: dataInput.url,
    method: dataInput.method
  }

  const projectId: any = dataInput.projectId

  return await request.create({data: {...data, project:{
    connect:{
      id: parseInt(projectId)
    }
  }}})
}
