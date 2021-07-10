import React, { ReactNode } from 'react'
import { useState } from 'react'
import PageTrackerContext from './PageTrackerContext'

const PageContextProvider = ({children}:{children:ReactNode}) => {
    const [page,setPage] = useState('')
    return (
        <PageTrackerContext.Provider value={{state:page,setState:setPage}}>
            {children}
        </PageTrackerContext.Provider>
    )
}

export default PageContextProvider
