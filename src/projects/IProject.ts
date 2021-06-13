import IProjectEvent from "./IProjectEvent";

interface IProject {
  id: string
  title: string
  subTitle: string
  description?: string
  image?: string
  events: IProjectEvent[]
}

export default IProject
