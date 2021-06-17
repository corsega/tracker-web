import { useEffect, useState } from 'react'
import { PageHeader, Button, Descriptions, Layout, Row, Col, Tabs } from 'antd'
import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import IssueListPage from '../issues/IssueListPage'
import graphql from '../graphql'

const TAB_ISSUES = 'issues'
const TAB_SETTINGS = 'settings'

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

const GetProject = `
  query GetProject($input: GetProjectInput) {
    getProject(input: $input) {
      id
      title
      subTitle
    }
  }
`

const ProjectPage = (props: any) => {
  const history = useHistory()
  const { path } = useRouteMatch()
  const { projectId, projectTabKey } = useParams()
  const [title, setTitle] = useState(null)

  const onChangeTab = (activeKey: string) => {
    history.push(`/${projectId}/${activeKey}`)
  }

  useEffect(() => {
    graphql(GetProject, { input: { id: projectId } })
      .then(({ data }: any) => {
        setTitle(data?.getProject?.title)
      })
  }, [projectId])

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    {
      path: '/',
      breadcrumbName: 'Projects',
    },
    // {
    //   path: '/',
    //   breadcrumbName: title || '',
    // },
  ]

  return (
    <div className="ProjectPage">
      <PageHeader
        title={title}
        className="ProjectPage-header"
        ghost={false}
        breadcrumb={{ routes }}
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
        <Layout.Content
          className="HomePage-content"
          style={{
            // padding: 0,
            // margin: 0,
            minHeight: 280,
          }}
        >
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
                </Switch>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Layout.Content>
      </PageHeader>
    </div>
  )
}

export default ProjectPage