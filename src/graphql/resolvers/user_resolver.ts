import { IResolvers } from '@graphql-tools/utils'
import { authenticated } from '../../middlewares/auth-guard'
import { User } from '../generated'

export const UserResolver: IResolvers = {
  Query: {
    me: authenticated(async (_: void, arg: void, context: any): Promise<User[]> => {
      console.log('me', context.currentUser)
      return context.currentUser
    })
  }
}
