
import classes from './RightPane.module.css'
import Tile from './Tile'

import useFetch from '../../hooks/useFetch'




const RightPane = () => {
 
    const { dataArray} = useFetch()
 
    
  
    return (
        <div className={classes["right-pane"]}>
            {dataArray && dataArray.map((data) => <Tile key={data.id} preview={data.images} id={data.id}/>)}
        </div>
    )
}

export default RightPane
