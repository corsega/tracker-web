import IUserWorkspace from "./IUserWorkspace";

interface IUser {
  id: string
  name: string
  email: string
  username: string
  workspaces: IUserWorkspace[],
  lastWorkspaceId: string,
}

export default IUser