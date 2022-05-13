import { makeExecutableSchema } from '@graphql-tools/schema';

export const authenticated = (next: any) => (
  root: any, args: any, context: any, info: any
) => {
  if (!context.currentUser) {
    throw new Error(`User is not authorized`);
  }

  return next(root, args, context, info);
};
