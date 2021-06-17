import React from 'react'
import IUser from './IUser'

export class UserData {
  public user: IUser|null = null
}

export const userData = new UserData()

export default React.createContext(userData)