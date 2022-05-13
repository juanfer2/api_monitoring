import { Service } from "typedi";
import { script } from "../../../clients/prisma_client";

export interface ScriptInput {
  title: string;
  content: string;
  type: string;
  queryId: number;
}

@Service()
class ScriptModel {
  public title: string;
  public description: string;
  public queryId: number;
  public type: string;
  public content: string;

  constructor({title = "", queryId, content="", type="text"}: ScriptInput){
    this.title = title;
    this.type = type;
    this.queryId = queryId;
    this.content = content
  }

  getBuild(): any{
    return {
      title: this.title,
      type: this.type,
      queryId: this.queryId,
      content: this.content
    }
  }

  async create(): Promise<any> {
    const data: any = {
      title: this.title,
      type: this.type,
      content: this.content
    }

    return await script.create({data: {...data, query:{
      connect:{
        id: this.queryId
      }
    }}})
  }
}

export default ScriptModel;
