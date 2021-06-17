import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Amplify from '@aws-amplify/core'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'
import UserProvider from './users/UserProvider'
import awsconfig from './aws-exports'
import './index.css'
import App from './App'

Amplify.configure(awsconfig)

const signUpFormFields = [
  {
    type: "username",
    label: "Username",
    inputProps: { required: true },
  },
  {
    type: "email",
    label: "Email",
    inputProps: { required: true },
  },
  {
    type: "password",
    label: "Password",
    inputProps: { required: true },
  },
]

const Root = (
  <AmplifyAuthenticator>
    <AmplifySignUp slot="sign-up" formFields={signUpFormFields} />
    <AmplifySignIn slot="sign-in" />
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </AmplifyAuthenticator>
)

ReactDOM.render(Root, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()


