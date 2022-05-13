import { create } from "lodash";
import { Service } from "typedi";
import { project,  } from "../../../clients/prisma_client";
import { UnwrapPromise } from "@prisma/client";
import { isEmpty } from "lodash";

// const _updateScripts = async (inputScript: any) => {
//   await script.update({
//     where: { id: parseInt(inputScript.id) },
//     data: {...inputScript, id: parseInt(inputScript.id) }
//   })
// }

// const _createScripts = async (inputScript: any, queryScriptid: any) => {
//   const newScript: any = {
//     title: inputScript.title, 
//     type: inputScript.type, 
//     content: inputScript.content
//   }
// 
//   await script.create({ 
//     data: {
//       ...newScript, queryScript: { connect:{ id: parseInt(queryScriptid)}
//     }}
//   })
// }

export const updateProjectAndQueries = async(id: any, inputProject: any) => {
  const scripts = inputProject.scripts

  // if (!isEmpty(scripts)){
  //   scripts.map((script:any) => {
  //     !isEmpty(script.id) ? _updateScripts(script) : _createScripts(script, id)
  //   })
  // }

  // return await queryScript.update({
  //   where: { id: parseInt(id) },
  //   data: { 
  //     title: inputProject.title, description: inputProject.description,
  //   },
  //   include: { scripts: true }
  // })
}
