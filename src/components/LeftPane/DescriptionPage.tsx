import React from 'react'
import { IPage } from '../../interfaces/IPage'
import classes from './DescriptionPage.module.css'
const DescriptionPage = ({ item }: { item: IPage }) => {
    return (
        <div className={classes["app-specs"]}>
            <h1>{item.name.toUpperCase()}</h1>
            <h3>{item.description}</h3>
            <h3>{item.buildTools}</h3>
        </div>
    )
}

export default DescriptionPage
