
import { useContext} from 'react'
import PageTrackerContext from '../../contexts/PageTrackerContext'
import useFetch from '../../hooks/useFetch'

import DescriptionPage from './DescriptionPage'
import classes from './LeftPane.module.css'

const LeftPane = () => {
    const { state } = useContext(PageTrackerContext)
    const { dataArray } = useFetch()

    let styles = `${classes.left} ${state&&classes.show}`
    return (
        <div className={styles}>
            {dataArray.map(data => {
                if (data.id === state) {
                   
                    return <DescriptionPage key={data.id} item={{ id: data.id, ...data.description }}/>
                }
                return ""
          })}
          
        </div>
    )
}

export default LeftPane
