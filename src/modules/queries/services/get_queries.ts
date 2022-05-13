import { Service } from "typedi";
import { queryScript } from "../../../clients/prisma_client";

@Service()
class GetProjects {
  constructor(){}

  async byUser(user: any, projectId: any) {
    return await queryScript.findMany({
      where: {
        projectId: projectId
      },
    });
  }
}

export default GetProjects;
