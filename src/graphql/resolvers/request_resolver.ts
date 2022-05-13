import { IResolvers } from '@graphql-tools/utils'
import { authenticated } from '../../middlewares/auth-guard'
import { create, InputRequest } from '../../modules/requests/repository'
import { Request } from '@prisma/client'

export const RequestResolver: IResolvers = {
  Mutation: {
    createRequest: authenticated(async (_: void, arg: any, context: any): Promise<Request> => {
      const requestInput: InputRequest = arg.RequestInput;
      const newRequest = await create(requestInput);

      return newRequest;
    }),
  }
}
