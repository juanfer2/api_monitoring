import { Service } from "typedi";
import { project } from "../../../clients/prisma_client";

export interface ProjectInput {
  title: string;
  description: string;
  user: any;
}

class ProjectModel {
  public title: string;
  public description: string;
  public user: any;

  constructor({title = "", description = "", user}: ProjectInput){
    this.title = title;
    this.description = description;
    this.user = user;
  }

  async create(): Promise<any> {
    const data: any = {
      title: this.title,
      description: this.description,
    }

    return await project.create({data: {...data, user:{
      connect:{
        id: this.user.id
      }
    }}})
  }

  async update({condition, data}: any): Promise<any> {
    return await project.create({data: {...data}})
    project.update({where: condition, data})
  }
}

export default ProjectModel;
