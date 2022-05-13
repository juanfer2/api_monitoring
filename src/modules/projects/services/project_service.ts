import { project } from "../../../clients/prisma_client";

export const updateProject = async(projectInput: any, id: any, user: any): Promise<any> => {
    return await project.update({ where: { id: parseInt(id) }, data: projectInput }).
      catch((error:any) => console.log(error))
}

export const deleteProject = async(id: any): Promise<any> => {
  return await project.delete({where: {id: parseInt(id)}}).
    catch((error:any) => console.log(error))
}
