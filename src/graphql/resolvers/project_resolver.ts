import { IResolvers } from '@graphql-tools/utils'
import { authenticated } from '../../middlewares/auth-guard'
import { Project, ProjectInput } from '../generated'
import ProjectModel from '../../modules/projects/models/project'
import GetProjects from '../../modules/projects/services/get_projects'
import { updateProject } from '../../modules/projects/services/project_service'

export const ProjectResolver: IResolvers = {
  Query: {
    projects: authenticated(async (_: void, arg: void, context: any): Promise<Project[]> => {
      const getProjects = new GetProjects
      const projects: any = await getProjects.byUser(context.currentUser)
      return projects ? projects : []
    }),
    projectById: authenticated(async (_: void, arg: any, context: any): Promise<Project[]> => {
      const projectId: number = arg.ID;
      const getProjects = new GetProjects
      const projects: any = await getProjects.byUserProjectId(context.currentUser,
        projectId)
      return projects ? projects : []
    }),
  },
  Mutation: {
    createProject: authenticated(async (_: void, arg: any, context: any): Promise<Project> => {
      const userInput: ProjectInput = arg.ProjectInput;
      const newProject = new ProjectModel({...userInput,
        user: context.currentUser});
      const data: any = await newProject.create();

      return data
    }),
    updateProject: authenticated(async (_: void, arg: any, context: any): Promise<Project> => {
      const projectInput = arg.ProjectInput;
      const id = arg.ID;
      return await updateProject(projectInput, id, context.currentUser)
    })
  }
}
