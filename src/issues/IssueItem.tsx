import { Card } from 'antd'
import IIssue from './IIssue'

export interface IIssueItemProps {
  issue: IIssue
  onClick: (issue: IIssue) => void,
}

const IssueItem = (props: IIssueItemProps) => {
  const { issue, onClick } = props
  return (
    <Card
      hoverable
      // style={{ width: 240 }}
      // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      onClick={() => onClick(issue)}
    >
      <Card.Meta title={issue.title} />
    </Card>
  )
}

export default IssueItem