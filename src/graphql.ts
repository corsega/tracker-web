import { API, graphqlOperation } from 'aws-amplify'

const graphql = async (query: string, variables: object = {}) => {
  return API.graphql(graphqlOperation(query, variables))
}

export default graphql