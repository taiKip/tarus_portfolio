
import { createContext } from 'react'
import { IState } from '../interfaces/IState'



const PageTrackerContext = createContext<IState>({state:'',setState:(a)=>console.warn("no string provided")})

export default PageTrackerContext