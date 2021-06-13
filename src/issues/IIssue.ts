import IIssueEvent from "./IIssueEvent"

interface IIssue {
  id: string
  title: string
  description?: string
  events: IIssueEvent[]
}

export default IIssue

