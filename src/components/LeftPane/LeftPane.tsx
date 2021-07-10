import React from 'react'
import { useContext } from 'react'
import PageTrackerContext from '../../contexts/PageTrackerContext'
import { IPage } from '../../interfaces/IPage'
import DescriptionPage from './DescriptionPage'
import classes from './LeftPane.module.css'
import { PageOptions } from '../../Types/PageOptions'
const LeftPane = () => {
    const { state } = useContext(PageTrackerContext)
    
    const firstBurger: IPage={
        name: "fast burger",
        description:"fast burger is a customizable web app built using react with firebase as the backend and aws s3 bucket as the storage utility for some of the assets.The inspiration came from one of my favourite food ordering apps.",
        buildTools: "React ts,Firebase,css modules,blurhash ",
        gitHubLink: "https://github.com/taiKip/fast_burger",
        websitLink:"https://stupefied-lumiere-ad5b4c.netlify.app/"
    }
    
    return (
        <div className={classes.left}>
            {(state==="page-1")&& <DescriptionPage item={firstBurger}/>}
        </div>
    )
}

export default LeftPane
