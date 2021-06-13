import IIssue from './IIssue'
import IssueItem from './IssueItem'

export interface IIssueListProps {
  issues: IIssue[]
  onClick: (issue: IIssue) => void,
}

const IssueList = (props: IIssueListProps) => {
  const { issues, onClick } = props
  return (
    <div className="IssueList">
      {issues.map((issue: IIssue) => (
        <IssueItem key={issue.id} issue={issue} onClick={onClick}/>
      ))}
    </div>
  )
}

export default IssueList