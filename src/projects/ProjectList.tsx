import { Row, Col } from 'antd'
import IProject from './IProject'
import ProjectCard from './ProjectCard'

export interface IProjectListProps {
  projects: IProject[]
  onClick: (issue: IProject) => void,
  [key: string]: any
}

const ProjectList = (props: IProjectListProps) => {
  return (
    <div className="ProjectList">
      <Row gutter={[16, 16]}>
        {props.projects?.map((project: IProject) => (
          <Col key={project.id} span={8}>
            <ProjectCard project={project} onClick={props.onClick} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProjectList