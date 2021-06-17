import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import IProject from '../projects/IProject'
import ProjectList from '../projects/ProjectList'
import graphql from '../graphql'

const ListProjects = `
  query ListProjects {
    listProjects {
      items {
        id
        title
        subTitle
      }
    }
  }
`

const HomeProjectList = () => {
  const history = useHistory()
  const [projects, setProjects] = useState([])

  const onClick = (project: IProject) => {
    history.push(`/${project.id}`)
  }

  useEffect(() => {
    graphql(ListProjects)
      .then(({ data }: any) => {
        setProjects(data?.listProjects?.items || [])
      })
  }, [])

  return (
    <ProjectList
      projects={projects}
      onClick={onClick}
    />
  )
}

export default HomeProjectList
