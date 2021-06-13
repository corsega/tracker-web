import { Card } from 'antd'
import IProject from './IProject'

export interface IProjectCardProps {
  project: IProject
  onClick: (project: IProject) => void,
}

const ProjectCard = (props: IProjectCardProps) => {
  const { project, onClick } = props
  return (
    <Card
      hoverable
      // style={{ width: 240 }}
      // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      onClick={() => onClick(project)}
    >
      <Card.Meta title={project.title} description={project.subTitle}/>
    </Card>
  )
}

export default ProjectCard