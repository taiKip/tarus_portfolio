
import { createContext } from 'react'
type InitialState = {
    state: string,
    setState: (a:string) => void
}
const PageTrackerContext = createContext<InitialState>({state:'',setState:(a)=>console.warn("something went wrong")})

export default PageTrackerContext