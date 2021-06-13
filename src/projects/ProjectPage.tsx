import { PageHeader, Button, Descriptions, Layout, Row, Col, Tabs } from 'antd'
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import find from 'lodash.find'
import IProject from './IProject'
import { users, projects } from '../data'
import IssueListPage from '../issues/IssueListPage'
import IUserWorkspace from '../users/IUserWorkspace'

const TAB_ISSUES = 'issues'
const TAB_SETTINGS = 'settings'

const ProjectPage = (props: any) => {
  const history = useHistory()
  const { projectId, projectTabKey } = useParams()
  const { path, url } = useRouteMatch()
  const project: IProject = find(projects, { id: projectId })
  const user = users[0]
  const workspace: IUserWorkspace = find(user.workspaces, { id: user.lastWorkspaceId })
  
  const projectTabs = [
    {
      key: TAB_ISSUES,
      title: 'Issues',
    },
    {
      key: TAB_SETTINGS,
      title: 'Settings',
    },
  ]

  const onChangeTab = (activeKey: string) => {
    history.push(`/${projectId}/${activeKey}`)
  }

  return (
    <div className="ProjectPage">
      <Layout.Content
        className="HomePage-content"
        style={{
          // padding: 0,
          // margin: 0,
          minHeight: 280,
        }}
      >
        {project ? (
          <PageHeader
            className="ProjectPage-page-header"
            // ghost={false}
            // onBack={() => history.push('/')}
            // title={`${workspace.title} / ${project.title}`}
            // subTitle={project.subTitle}
            // extra={[
            //   <Button key="3">Operation</Button>,
            //   <Button key="2">Operation</Button>,
            //   <Button key="1" type="primary">
            //     Primary
            //   </Button>,
            // ]}
          >
            {/* <Descriptions size="small" column={3}>
              <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
              <Descriptions.Item label="Association">
                <a>421421</a>
              </Descriptions.Item>
              <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
              <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
              <Descriptions.Item label="Remarks">
                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions> */}

            <Tabs size="large" activeKey={projectTabKey || TAB_ISSUES} onChange={onChangeTab} type="card">
              {projectTabs.map((tab) => (
                <Tabs.TabPane tab={tab.title} key={tab.key}>
                  <Switch>
                    <Route exact path={`/${projectId}/issues`}>
                      <IssueListPage />
                    </Route>
                    <Route exact path={`/${projectId}/settings`}>
                      Settings
                    </Route>
                    <Route exact path={path}>
                      <IssueListPage />
                    </Route>
                    {/* <Route path={`${path}/:topicId`}>
                      <Topic />
                    </Route> */}
                  </Switch>
                </Tabs.TabPane>
              ))}
            </Tabs>


          </PageHeader>
        ): (
          <>Project not found... redirect.</>
        )}
      </Layout.Content>
    </div>
  )
}

export default ProjectPage