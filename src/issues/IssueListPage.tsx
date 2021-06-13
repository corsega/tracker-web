import IssueList from "./IssueList"
import { issues } from '../data'
import IIssue from "./IIssue"

export interface IIssueListPageProps {

}

const IssueListPage = (props: IIssueListPageProps) => {

  const onClickIssue = (issue: IIssue) => {
    console.log(issue)
  }

  return (
    <div className="IssueListPage">
      <IssueList issues={issues} onClick={onClickIssue} />
    </div>
  )
}

export default IssueListPage