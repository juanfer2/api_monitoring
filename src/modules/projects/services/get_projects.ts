import { Service } from "typedi";
import { project } from "../../../clients/prisma_client";

@Service()
class GetProjects {
  constructor(){}

  async byUser(user: any) {
    return await project.findMany({
      where: {
        userId: user.id
      },
    });
  }

  async byUserProjectId(user: any, id: number) {
    return await project.findFirst({
      where: {
        id,
        userId: user.id
      },
      // include: {
      //   queryScripts: {
      //     include: {
      //       scripts: true
      //     }
      //   },
      // },
    });
  }
}

export default GetProjects;
