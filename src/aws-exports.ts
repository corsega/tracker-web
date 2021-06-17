import Auth from "@aws-amplify/auth"

/* eslint import/no-anonymous-default-export: [2, {'allowObject': true}] */
export default {
  aws_appsync_graphqlEndpoint: process.env.APPSYNC_GRAPHQL_ENDPOINT || 'http://192.168.86.38:20002/graphql',
  aws_appsync_region: process.env.APPSYNC_REGION || 'us-east-1',
  aws_appsync_authenticationType: process.env.APPSYNC_AUTH_TYPE || 'API_KEY', // AMAZON_COGNITO_USER_POOLS
  aws_appsync_apiKey: process.env.APPSYNC_API_KEY || '0123456789',
  graphql_endpoint_iam_region: 'us-east-1',
  API: {
    graphql_headers: async (_options: any) => {
      return {
        'Authotization': (await Auth.currentSession()).getAccessToken().getJwtToken(),
      }
    }
  },
  aws_cognito_region: process.env.COGNITO_REGION || 'us-east-1', // (required) - Region where Amazon Cognito project was created   
  aws_user_pools_id:  process.env.COGNITO_USER_POOLS_ID || 'us-east-1_GB7jDYcW5', // (optional) -  Amazon Cognito User Pool ID   
  aws_user_pools_web_client_id: process.env.COGNITO_USER_POOLS_WEB_CLIENT_ID ||'4n15jj8vuhfdbrdleg5qsngbjf', // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
  aws_mandatory_sign_in: 'enable' // (optional) - Users are not allowed to get the aws credentials unless they are signed in
  // aws_cognito_identity_pool_id: 'us-east-1:f602c14b-0fde-409c-9a7e-0baccbfd87d0', // (optional) - Amazon Cognito Identity Pool ID   
}