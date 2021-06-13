import IProject from './projects/IProject'
import times from 'lodash.times'
import { v4 as uuid } from 'uuid'
import IUser from './users/IUser'

export const users: IUser[] = [
  {
    id: 'u_d2790c9b-d251-4594-9f77-f5e93d74a9eb',
    name: `Oz`,
    username: `oz`,
    email: `dev@corsega.io`,
    lastWorkspaceId: 'w_760b9664-4290-4fe9-9988-8c94675b7504',
    workspaces: [
      {
        id: 'w_760b9664-4290-4fe9-9988-8c94675b7504',
        title: 'Issue Tracker',
        ownerUserId: 'u_d2790c9b-d251-4594-9f77-f5e93d74a9eb',
      },
      {
        id: 'w_7092719a-380f-4783-93a2-920dc3f8298d',
        title: 'Workspace #2',
        ownerUserId: 'u_d2790c9b-d251-4594-9f77-f5e93d74a9eb',
      },
    ]
  }
]

export const projects: IProject[] = [
  {
    id: `p_d2790c9b-d251-4594-9f77-f5e93d74a9eb1`,
    title: `Web App`,
    subTitle: `React.js web app.`,
    image: ``,
    events: [],
  },
  {
    id: `p_d2790c9b-d251-4594-9f77-f5e93d74a9eb2`,
    title: `Authentication`,
    subTitle: `Cognito authentication.`,
    image: ``,
    events: [],
  },
  {
    id: `p_d2790c9b-d251-4594-9f77-f5e93d74a9eb3`,
    title: `GraphQL API`,
    subTitle: `AppSync as API gateway for services.`,
    image: ``,
    events: [],
  },
  {
    id: `p_d2790c9b-d251-4594-9f77-f5e93d74a9eb4`,
    title: `User Service`,
    subTitle: `User data storage.`,
    image: ``,
    events: [],
  },
  {
    id: `p_d2790c9b-d251-4594-9f77-f5e93d74a9eb5`,
    title: `Project Service`,
    subTitle: `Project data storage.`,
    image: ``,
    events: [],
  },
  {
    id: `p_d2790c9b-d251-4594-9f77-f5e93d74a9eb6`,
    title: `Activity Service`,
    subTitle: `Event sourcing.`,
    image: ``,
    events: [],
  },
]

export const issues = times(10, () => {
  const id = `i_${uuid()}`
  return {
    id,
    title: `Issue #${id}`,
    description: ``,
    createdAt: (new Date()).toISOString(),
  }
})