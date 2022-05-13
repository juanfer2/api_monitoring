import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
});

export const { user, project, request } = prisma;
export default prisma;
