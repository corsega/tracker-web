import React, { useEffect } from 'react'
import graphql from '../graphql'
import UserContext, { userData } from './UserContext'

interface IUserProviderProps {
  children: React.ReactNode[] | React.ReactNode
}

const GetAuthenticatedUser = `
  query GetAuthenticatedUser {
    user {
      name
      email
      username
      workspaces {
        id
        title
      }
    }
  }
`

const UserProvider = (props: IUserProviderProps) => {
  useEffect(() => {
    graphql(GetAuthenticatedUser)
      .then(({ data }: any) => {
        userData.user = data.user
      })
  }, [])
  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider