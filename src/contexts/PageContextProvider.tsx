import React, { ReactNode } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { IState } from '../interfaces/IState'
import PageTrackerContext from './PageTrackerContext'

const PageTrackerProvider = ({children}:{children:ReactNode}) => {
   const [state,setState]  = useState<string>('')
    return (
        <PageTrackerContext.Provider value={{  state, setState }}>
            {children}
        </PageTrackerContext.Provider>
    )
}

export default PageTrackerProvider
