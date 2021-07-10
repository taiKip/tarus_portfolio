import React from 'react'
import LeftPane from './LeftPane/LeftPane'
import classes from './Main.module.css'
import RightPane from './RightPane/RightPane'

const Main = () => {
    return (
        <div className={classes.main} >
           <LeftPane/>
           <RightPane/>
        </div>
    )
}

export default Main
