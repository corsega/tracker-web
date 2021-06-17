import { Breadcrumb, Button, Layout, PageHeader, Row, Tag } from 'antd'
// import { Content } from 'antd/lib/layout/layout'
import HomeProjectList from './HomeProjectList'

const routes = [
  {
    path: '/',
    breadcrumbName: 'Projects',
  },
  // {
  //   path: 'first',
  //   breadcrumbName: 'Second-level Menu',
  // },
  // {
  //   path: 'second',
  //   breadcrumbName: 'Third-level Menu',
  // },
]

// const Content = (props: any) => (
//   <Row>
//     <div style={{ flex: 1 }}>{props.children}</div>
//     <div className="image">{props.extraContent}</div>
//   </Row>
// )

const HomePage = () => {
  return (
    <div className="HomePage">
      <PageHeader
          title="Projects"
          className="HomePage-header"
          // subTitle="This is a subtitle"
          // tags={<Tag color="blue">Running</Tag>}
          extra={[
            // <Button key="3">Operation</Button>,
            // <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Create Project
            </Button>,
          ]}
          // breadcrumb={{ routes }}
        >
          {/* <Content
            extraContent={
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                alt="content"
                width="100%"
              />
            }
          >
            Foo
          </Content> */}
        <Layout.Content
          className="HomePage-content"
          style={{
            // paddingTop: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div className="HomePage-projects">
            <HomeProjectList />
          </div>
        </Layout.Content>
      </PageHeader>
    </div>
  )
}

export default HomePage
