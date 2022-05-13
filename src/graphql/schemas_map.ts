  
import 'graphql-import-node'
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolverMap from './resolvers_map'
import * as userTypeDefs from './schemas/users/user.graphql'
import * as loginTypeDefs from './schemas/auth/login.graphql'
import * as registerTypeDefs from './schemas/auth/register.graphql'
import * as emptyTypeDefs from './schemas/empty.graphql'
import * as healtTypeDefs from './schemas/healt/healt.graphql'
import * as ProjectTypeDefs from './schemas/projects/project.graphql'
import * as RequestTypeDefs from './schemas/requests/request.graphql'

const schema = makeExecutableSchema({
  typeDefs: [
    emptyTypeDefs, userTypeDefs, healtTypeDefs, loginTypeDefs, registerTypeDefs,
    ProjectTypeDefs, RequestTypeDefs
  ],
  resolvers: resolverMap
})

//const schemaWithResolvers =  addResolversToSchema({schema, resolvers: resolverMap})

export default schema;
