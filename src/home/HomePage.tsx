import {
  Breadcrumb,
  Layout,
  Row,
  Col,
} from 'antd'
import { useHistory } from 'react-router'
import ProjectCard from '../projects/ProjectCard'
import IProject from '../projects/IProject'
import { projects } from '../data'

const HomePage = () => {
  const history = useHistory()

  const onClick = (project: IProject) => {
    history.push(`/${project.id}`)
  }

  return (
    <div className="HomePage">
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout.Content
        className="HomePage-content"
        style={{
          paddingTop: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="HomePage-projects">
          <Row gutter={[16, 16]}>
            {projects.map((project: IProject) => (
              <Col key={project.id} span={8}>
                <ProjectCard project={project} onClick={onClick} />
              </Col>
            ))}
          </Row>
        </div>
      </Layout.Content>
    </div>
  )
}

export default HomePage
