import { Avatar, Layout, Menu, Col, Row, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Switch, Route, useHistory } from "react-router-dom"
import HomePage from './home/HomePage'
import ProjectPage from './projects/ProjectPage'
import './App.css'
import UserContext from './users/UserContext'
// import { useEffect } from 'react'

const App = () => {
  const history = useHistory()

  return (

    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header className="header">
        <Row>
          <Col>
            <div className="logo" />
          </Col>
          <Col flex="auto">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" onClick={() => history.push('/')}>
                Home
              </Menu.Item>
              {/* <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Col>
          <Col flex="100px" className="right" style={{ color: '#fff'}}>
            {/* <Avatar size="small" icon={<UserOutlined />} /> */}
            <UserContext.Consumer>
              {({ user }) => user?.username}
            </UserContext.Consumer>
          </Col>
        </Row>
      </Layout.Header>

      <Layout style={{ padding: '0 24px 24px' }}>
        <Switch>
          <Route path="/:projectId/:projectTabKey">
            <ProjectPage />
          </Route>
          <Route path="/:projectId">
            <ProjectPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>

      <Layout.Footer style={{ textAlign: 'center' }}>
        © {(new Date()).getFullYear()} Created by corsega.io
      </Layout.Footer>
    </Layout>
  )
}

export default App