import { Service } from "typedi";
import { queryScript } from "../../../clients/prisma_client";
import { ScriptInput } from "./script_model";

export interface QueryInput {
  title?: string | undefined;
  description?: string;
  projectId: number;
  scripts?: ScriptInput[];
}

@Service()
class QueryModel {
  public title: string;
  public description: string;
  public projectId: number;
  public scripts: ScriptInput[];

  constructor({title = "", description = "", projectId, scripts=[]}: QueryInput){
    this.title = title;
    this.description = description;
    this.projectId = projectId;
    this.scripts = scripts;
  }

  async create(): Promise<any> {
    const id: any = this.projectId 
    const data: any = {
      title: this.title,
      description: this.description,
      scripts: {
        create: this.scripts
      }
    }

    return await queryScript.create({data: {...data,
      project:{
        connect:{
          id: parseInt(id)
        }
      }
    }})
  }

  // async update({condition, data}: any): Promise<any> {
  //   return await project.create({data: {...data}})
  // }
}

export default QueryModel;
