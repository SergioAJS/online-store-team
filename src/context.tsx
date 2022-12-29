import React from 'react'
import { IContext } from './models'

const obj: IContext = {}

const AppContext = React.createContext(obj)

export default AppContext
